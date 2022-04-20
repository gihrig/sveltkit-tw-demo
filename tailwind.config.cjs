const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      boxShadow: {
        code: '2px 2px 6px rgba(255, 255, 255, 0.25)',
      },
      colors: {
        code: {
          background: 'rgba(255, 255, 255, 0.45)',
          text: '#444444',
        },
      },
      fontFamily: {
        mono: "'Fira Mono', monospace",
      },
    },
  },

  plugins: [forms, typography],
};

module.exports = config;
