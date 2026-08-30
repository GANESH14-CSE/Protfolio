import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import nodemailer from 'nodemailer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      allowedHosts: ['.ngrok-free.dev']
    },
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('framer-motion')) return 'vendor-motion';
              if (id.includes('react-icons') || id.includes('lucide-react')) return 'vendor-icons';
              if (id.includes('lenis')) return 'vendor-lenis';
              return 'vendor-core';
            }
          }
        }
      }
    },
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'api-contact-handler',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const { name, email, message } = JSON.parse(body);

                  const user = env.GMAIL_USER;
                  const pass = env.GMAIL_PASS;

                  if (!user || !pass) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Mail credentials not configured in .env file' }));
                    return;
                  }

                  const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: user,
                      pass: pass,
                    },
                  });

                  const mailOptions = {
                    from: email,
                    to: user,
                    replyTo: email,
                    subject: `Portfolio Contact from ${name}`,
                    text: `You received a message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                  };

                  await transporter.sendMail(mailOptions);

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ message: 'Success' }));
                } catch (error: any) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: error.message || 'Failed to send email' }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
  };
})
