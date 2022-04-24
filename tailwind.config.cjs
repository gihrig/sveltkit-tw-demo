const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const { readBuilderProgram } = require('typescript');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        code: '2px 2px 6px rgba(255, 255, 255, 0.25)',
      },
      colors: {
        accent: '#ff3e00',
        heading: 'rgba(0, 0, 0, 0.7)',
        text: '#444444',
        hoverbg: '#b9c6d2',
        navbg: 'rgba(255, 255, 255, 0.7)',
        code: {
          background: 'rgba(255, 255, 255, 0.45)',
          text: '#444444',
        },
      },
      fontFamily: {
        mono: "'Fira Mono', monospace",
        sans: "Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
      },
      fontSize: {
        '3.5xl': '2.0rem',
      },
    },
  },

  plugins: [forms, typography],
};

module.exports = config;
