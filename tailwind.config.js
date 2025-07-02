import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    // tailwind.config.js
    theme: {
        extend: {
            fontFamily: {
                sans: ['Kantumruy Pro', 'sans-serif'], // this overrides Tailwind's default
            },
        },
    },
    plugins: [],
}
