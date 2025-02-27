/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope':' "Manrope", sans-serif;'
      }, 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'button': "4px 4px 0px 0px #000",
      },
      fontSize: {
        '32px': '32px'
      },
      width:{
        '1512':'1512px',
        '648':'648px'
      },
      letterspacing: {
        wider:'2.56px'
      
      },
      lineHeight: {
        height:'38.4px'
      }
    },
  },
  plugins: [],
}
