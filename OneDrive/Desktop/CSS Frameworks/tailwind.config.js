module.exports = {
  content: [
    './index.html',
    './feed/index.html',
    './profile/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', 
        secondary: '#9333EA', 
        neutral: {
          300: '#D1D5DB',
          500: '#64748B',
          700: '#374151',
        },
        background: '#F9FAFB',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'], 
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.1)', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
