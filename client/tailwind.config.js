module.exports = {
  content: ["./pages/**/*.{tsx,js,html}"],
  theme: {
    extend: {
      transitionTimingFunction:{
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease':'ease'
      },
      fontFamily: {
        'roboto':['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'poppin':['Poppins', 'sans-serif']
      },
   animation: {
        wiggle: 'wiggle 0.3s ease-in-out  ',
        fadeInDown:'fadeInDown 1s ease-in-out'
      },
      keyframes: {
        wiggle: {
          '0%': { width:'0rem' },
          '10%': { width:'0.5rem' },
          '30%': { width:'1rem' },
          '60%': { width: '2rem' },
          '100%':{width:'3rem'}
        },
        fadeInDown :{
          'from':{
            opacity: '0',
             '-webkit-transform': 'translate3d(0, -100%, 0)',
             transform: 'translate3d(0, -100%, 0)'
          },
         'to': {
              opacity: '1',
              '-webkit-transform': 'none',
              transform: 'none'
            }
        }
      },
      colors: {
        'transparent': 'rgba(255,255,255,.15)',
      },
    },
  },
  plugins: [],
}
