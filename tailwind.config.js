/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'xsm': '0 5px 5px 0 rgba(0, 0, 0, 0.25)',
      }
    },
    container: {
      center: true,
      padding : '2rem',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.1em',
      wider: '.15em',
      widest: '.25em',
    }
  },
  plugins: [],
}
