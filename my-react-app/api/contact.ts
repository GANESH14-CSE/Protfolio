import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Missing fields' });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    return response.status(500).json({ error: 'Mail credentials not configured' });
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

  try {
    await transporter.sendMail(mailOptions);
    return response.status(200).json({ message: 'Success' });
  } catch (error: any) {
    return response.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
