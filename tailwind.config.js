/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['josefin'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'p1': '#F2F2F2',
      'p2': '#D9D9D9',
      'p3': '#737373',
      'p4': '#262626',
      'p5': '#0D0D0D',
      'marron': '#BF9E75',
      'p7': '#FFFFFF', 
      'p8': '#000000', 
      'logo': '#3C3C39',

    },
  },
  plugins: [],
}
