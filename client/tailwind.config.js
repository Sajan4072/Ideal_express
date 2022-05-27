module.exports = {
  content: [
            "./pages/**/*.{tsx,js,html}",
            "./layouts/**/*.{tsx,js,html}",
          ],
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
        fadeInDown:'fadeInDown 0.6s ease-in-out',
        dropdown:'dropdown 0.6s ease-in-out',
        modal:'modal 0.6s ease',
        pulse2: 'pulsing 1.5s infinite linear'
      },
      keyframes: {
        wiggle: {
          '0%': { width:'0rem' },
          '10%': { width:'0.3rem' },
          '20%': { width:'0.6rem' },
          '30%': { width:'0.9rem' },
          '40%': { width: '1.2rem' },
          '50%': { width: '1.5rem' },
          '60%': { width: '1.8rem' },
          '70%': { width: '2.1rem' },
          '80%': { width: '2.4rem' },
          '90%': { width: '2.7rem' },
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
        },
        dropdown :{
          'from':{
            opacity: '1',
             '-webkit-transform': 'translate3d(0, -5%, 0)',
             transform: 'translate3d(0, -5%, 0)'
          },
         'to': {
              opacity: '1',
              '-webkit-transform': 'none',
              transform: 'none'
            }
        },
        modal :{
          'from':{
            opacity: '0',
             '-webkit-transform': 'translate3d(-100, -100%, -100%)',
             transform: 'translate3d(-100%, -100%, -100%)'
          },
         'to': {
              opacity: '1',
              '-webkit-transform': 'none',
              transform: 'none'
            }
        },
        pulsing :{
          '0%':{
                '-webkit-transform':'scale(1)',
              '-moz-transform':'scale(1)',
              '-ms-transform':'scale(1)',
              '-o-transform':'scale(1)',
              transform:'scale(1)',
          },
          '100%':{
              "-webkit-transform":"scale(1.1)",
              "-moz-transform":"scale(1.1)",
              "-ms-transform":"scale(1.1)",
              "-o-transform":"scale(1.1)",
              transform:'scale(1.1)',
              opacity:"0"
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
