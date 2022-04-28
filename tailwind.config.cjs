const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const { readBuilderProgram } = require('typescript');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      backgroundImage: {
        'delete-icon': "URL('delete.svg')",
        'check-icon': "URL('check.svg')",
        'save-icon': "URL('save.svg')",
      },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        code: '2px 2px 6px rgba(255, 255, 255, 0.25)',
      },
      colors: {
        accent: '#ff3e00',
        code: {
          background: 'rgba(255, 255, 255, 0.45)',
          text: '#444444',
        },
        heading: 'rgba(0, 0, 0, 0.7)',
        hoverbg: '#b9c6d2',
        navbg: 'rgba(255, 255, 255, 0.7)',
        soft: 'rgba(0, 0, 0, 0.1)',
        text: '#444444',
      },
      fontFamily: {
        mono: "'Fira Mono', monospace",
        sans: "Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
      },
      fontSize: {
        '3.5xl': '2.0rem',
        '4.5xl': '2.4rem',
        '6.5xl': '4.0rem',
      },
      screens: {
        tablet: '720px',
      },
    },
  },

  plugins: [forms, typography],
};

module.exports = config;
