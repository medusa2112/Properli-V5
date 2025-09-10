import type { Config } from 'tailwindcss'
export default {
  darkMode: ['class'],
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--bg))',
        foreground: 'hsl(var(--fg))',
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' }
      }
    }
  },
  plugins: []
} satisfies Config
