/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
         azul: '#A5D2FF',
    fundo: '#0A0D13',
    cards: '#151B26',
    roxo: '#7747ED',
    azulescuro: '#003D60',
    verde: '#53E69E',
    vermelho: '#F66D65',
    texto: '#FFFFFF',
    texto2:'#73767D',
    select:'#6082A8',
    azul2:'#233048',
      },
      fontFamily: {
        sans: ['Inter_400Regular', 'sans-serif'], 
        'inter': ['Inter_400Regular', 'sans-serif'], 
        'inter-m': ['Inter_500Medium', 'sans-serif'],
        'inter-b': ['Inter_700Bold', 'sans-serif'],
        'inter-extra': ['Inter_800ExtraBold', 'sans-serif'],
      },
       borderRadius: {
        'padrao': '15px',
      
      },
      padding:{
        'pp':'20px'
      },
      margin:{
        'pp':'20px'
      },
      width:{
        'img':'10.8rem'
      }
    },
  },
  plugins: [],
}