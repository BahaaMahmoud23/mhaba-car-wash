/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-light': '#F8FAFC',
        'bg-dark': '#080B12',
        secondary: '#111827',
        primary: '#1E90FF',
        accent: '#00BFFF',
        'text-main': '#0B0F1A',
        'text-muted': '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(30,144,255,0.35)',
        'glow-lg': '0 0 40px rgba(30,144,255,0.4)',
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 24px rgba(30,144,255,0.15)',
      },
    },
  },
  plugins: [],
}
