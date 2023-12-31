/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'footer-blue': '#004788',
        'copyright-blue': '#002F5B', 
        'white': '#fff', 
        'black': '#000',
        'button-blue': '#0064C0', 
        'button-blue-bg': 'rgba(0, 100, 192, 5%)'
      },
      fontFamily: {
        workSansReg: 'work Sans, san-serif', 
        RobotoSerif: 'roboto serif, serif'
      }
    },
  },
  plugins: [],
}