import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050816',
        'bg-secondary': '#0F172A',
        'electric-blue': '#3B82F6',
        'neon-cyan': '#06B6D4',
        'violet': '#8B5CF6',
        'soft-pink': '#EC4899',
        'text-primary': '#F8FAFC',
        'text-secondary': '#CBD5E1',
        'text-muted': '#64748B',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config
