import { colors } from './styles/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: colors, 
      fontFamily: {
        sans: ['Inter_400Regular', 'sans-serif'], 
        'inter': ['Inter_400Regular', 'sans-serif'], 
        'inter-m': ['Inter_500Medium', 'sans-serif'],
        'inter-b': ['Inter_700Bold', 'sans-serif'],
        'inter-extra': ['Inter_800ExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}