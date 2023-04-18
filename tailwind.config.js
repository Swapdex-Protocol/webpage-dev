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
      overscrollBehavior: {
        'x-none': 'none',
      },
    },
    screens: {
      'mobile-s': '320px',
      // => Mobile S -> 320px to 375px

      'mobile-m': '375px',
      // => Mobile M -> 375px to 425px

      'mobile-l': '425px',
      // => Mobile L -> 425px to 640px

      sm: '640px',
      // => @media -> 640px to 768px

      'tablet-s': '768px',
      // => Tablet -> 768px to 1024px

      'laptop-s': '1024px',
      // => Laptop -> 1024px to 1280px

      xl: '1280px',
      // => @media -> 1280px to 1440px

      'laptop-l': '1440px',
      // => Laptop L

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4k': '2560px',
      // => 4k res
    },
  },
  variants: {
    extend: {
      overscrollBehavior: ['responsive'],
    },
  },
  plugins: [],
};
