/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#FEF6EC',100:'#FDEAD3',500:'#E8641B',600:'#C95212',700:'#A63F0D' },
        leaf: '#2F7D32',
        cream: '#FFFBF2',
        ink: '#1F1B16'
      },
      fontFamily: { display: ['"Plus Jakarta Sans"','system-ui','sans-serif'], body: ['Inter','system-ui','sans-serif'] }
    }
  },
  plugins: []
}
