/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // './src/**/*.{js,ts,jsx,tsx}',
    './src/App.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        screenWithHeader: 'calc(100vh - 60px)',
        header: '60px',
      },
      width: {
        songCard: '200px',
      },
    },
  },
  plugins: [],
};
