import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import { createI18n } from 'vue-i18n'
/**
 * About
Register
User
Services
Projects
Setting
 */
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            user: 'User',
            services: 'Services',
            projects: 'Projects',
            setting: 'Setting'
        },
        khm: {
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            setting: 'ការកំណត់'
        }
    }
}
)

const app = createApp(App)
app.use(router)
app.use(i18n)
createApp(App)
app.mount('#app')
