/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    
    extend: {
     colors:
     {
      dark: '#1b1d1a',
      light: '#767268',
      tan:'#D2B48C'
     },
     fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },

     lineheight:{
      md:'1.4'
     },

     fontsize:{
      md:'2.5rem',
      lg:'4rem'
     },

     fontweight:{
      sm:'200',
      md:'400',
      lg:'600',
      xl:'800'
     },

    
    },

    
  },
  plugins: [],
}

