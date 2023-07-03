/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: '767px' },
        // => @media (max-width: 767px) { ... }
        tablet: { min: '768px', max: '1280px' },
        // => @media (min-width: 768px and max-width: 1280px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      title: '24px',
      properties: '14px',
      description: '16px',
      superhost: '12px',
      navbar: '14px',
    },
    lineHeight: {
      title: '30px',
      properties: '17px',
      description: '19.5px',
      superhost: '14.63px',
      navbar: '17.57px',
    },
    colors: {
      orange: '#EB5757E5',
      white: '#FFFFFF',
      black: '#333333',
      gray3: '#828282',
      gray: '#4F4F4F',
    },
  },
  plugins: [],
}
