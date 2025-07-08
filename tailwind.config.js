import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kantumruy Pro', 'sans-serif'], // this overrides Tailwind's default
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}

//text scrolling
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         marquee: 'marquee 20s linear infinite',
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(300%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         }
//       },
//     }
//   }
// }
//typewriter
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         typing: 'typing 5s steps(40, end), blink-caret .75s step-end infinite',
//       },
//       keyframes: {
//         typing: {
//           '0%': { width: '0' },
//           '50%': { width: '100%' },
//           '100%': {width:'0'}
//         },
//         'blink-caret': {
//           from: { 'border-right-color': 'transparent' },
//           to: { 'border-right-color': 'black' },
//         },
//       },
//     },
//   },
// }

