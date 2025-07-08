<template>
    <header class="relative bg-black text-white p-4">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <router-link class="block text-teal-200" to="/">
            <span class="">Yorn|Porfolio</span>
                
            </router-link>

            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/about"> {{ $t('about') }} </router-link>
                        </li>

                        <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/careers"> {{ $t('Careers') }} </router-link>
                        </li>


                        <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/services"> {{ $t('services') }} </router-link>
                        </li>

                        <!-- <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/projects"> {{ $t('contact') }} </router-link>
                        </li> -->

                        <!-- <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/setting"> {{ $t('setting') }} </router-link>
                        </li> -->
                         <!-- <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/button">{{ $t('button') }}</router-link>

                        </li> -->
                        <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/user"> {{ $t('user') }}</router-link>

                        </li>
                        
                        <li>
                            <router-link class="text-gray-300 transition hover:text-yellow-200/75" to="/history"> {{ $t('history') }}</router-link>
                        </li>
                        
                    </ul>
                </nav>
<!--Chang Lange-->
                <div class="flex items-center gap-4">
                    <div v-if="$i18n.locale === 'en'" @click="changeLanguage('khm')"
                        class="hover:cursor-pointer bg-blue-500 rounded-3xl px-3 py-2 text-white hover:bg-blue-300">
                        Khmer</div>
                    <div v-else @click="changeLanguage('en')"
                        class="hover:cursor-pointer bg-blue-500 rounded-3xl px-3 py-2 text-white hover:bg-blue-300">
                        English</div>

                    <div class="sm:flex sm:gap-4">
                        <!-- <a class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                            href="#">
                            {{ $t('login') }}
                        </a> -->

                        <router-link class="hidden rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-gray-100 transition hover:bg-yellow-400 sm:block"
                            to="/register">
                             {{ $t('contact') }}
                        </router-link>
                    </div>

                    <button
                        class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                        <span class="sr-only">Toggle menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import Careers from '@/pages/Careers.vue';

export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>