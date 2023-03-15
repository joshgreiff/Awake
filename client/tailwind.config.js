/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}/**"],
  theme: {
    extend: {
      keyframes:{
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1.0)'}
        },
        'close-menu': {
          '0%': {transform: 'scaleY(1.0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(0)'}
        },
        },
        animation: {
          'open-menu': "open-menu 0.5s ease-in-out forwards",
          'close-menu': 'close-menu 0.5s ease-in-out forwards',
        },
        colors: {
          'primary-blue': '#3aadec',
          'primary-purple': '#7c2ae8',
          'primary-yellow': '#dffc01',
          'secondary-blue': '#00c2cb',
          'secondary-turqoise': '#2ed1a2',
          'secondary-limegreen': '#2ed1a2',
          'bookmark-white': '#f7f7f7',
          'dark': '#111827',
          'nav-grey': '#D3D3D3'
        },
        fontSize: {
            mammoth: '8rem'
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                lg: "5000px",
                xl: "5000px",
                "2xl": "5000px",
            }
        }
    },
  },
  plugins: [],
}
