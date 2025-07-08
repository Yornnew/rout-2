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
            contact: 'Contact',
            user: 'User',
            services: 'Services',
            // contact: 'Contact',
            //setting: 'Setting',
            Careers: 'Skills',
            // button: 'button',
            history: 'history',
            // login:'login'
        },
        khm: {
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            contact: 'ទំនាក់ទំនង',
            user: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            // contact: 'ទំនាក់ទំនង',
            // setting: 'ការកំណត់',
            Careers: 'អាជីព',
            // button: 'ប៊ូតុង',
            history: 'ប្រវត្តិប្រិតបត្តិការ',
           // login: 'សូមអញ្ជើញចូលប្រព័ន្ធបាទ'
        }
    }
}
)

const app = createApp(App)
app.use(router)
app.use(i18n)
createApp(App)
app.mount('#app')
