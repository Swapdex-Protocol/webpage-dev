/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'SDX-900': '#0C101A',
        'SDX-800': '#141A29',
        'SDX-700': '#1D273A',
        'SDX-600': '#222F47',
        'SDX-500': '#304264',
        'SDX-400': '#8499B1',
        'SDX-300': '#D8DBE2',
        'SDX-200': '#E6E9F0',
        'SDX-DarkPink': '#B13285',
        'SDX-Pink': '#E64082',
        'SDX-LightPink': '#FFABCC',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
