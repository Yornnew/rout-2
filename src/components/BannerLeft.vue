<template>
    <section class="bg-blue-100 lg:grid lg:h-screen lg:place-content-center">
        <div class="mx-auto w-screen max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
            <div class="  max-w-prose text-left sticky top-0 z-50  p-6 rounded-lg">
                <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Welcome to Koemyorn Portfolio
                    <strong class="text-green-600"> share and contribute </strong>
                    How to create Portfolio
                </h1>

                <p class="mt-4 text-base text-pretty text-gray-900 sm:text-lg/relaxed">
                   I am Yoy Koemyorn as a officer of Ministry of Land Management Unrban Planning and Construction.
                   I commence a career of civil servant since 2024.
                </p>

                <div class="mt-4 flex gap-4 sm:mt-6">
                    <router-link class="inline-block rounded  bg-green-600 px-5 py-3 font-medium text-white shadow-xl transition-colors hover:bg-yellow-700"
                        to="/register">
                        Contact
                    </router-link>

                    <a class="inline-block rounded  bg-gray-300 px-5 py-3 font-medium text-gray-900 shadow-xl transition-colors hover:bg-gray-50 hover:text-gray-900"
                        href="#">
                        Learn More
                    </a>
                </div>
            </div>
            
            <div>
                
                <img :src="stand" alt="stand" width="570" class=" shadow-xl bg-blue-200  h-150 ml-15 rounded-xl z-0 p-1"/>
            
                <div><br><p class="text-center font-bold text-green-700 text-xl ml-10 mt-5">The more you practise, the better you are!</p></div>
            </div>
    <!--typewriter-->
            <!-- <div class="typewriter">
                <p class="text-xl font-mono overflow-hidden whitespace-nowrap border-r-2 border-r-black animate-typing">
                    Your text here
                </p>
            </div> -->
            
        </div>
    </section>
    <!--text scrolling-->
    <div class="relative overflow-hidden whitespace-nowrap">
        <div class="animate-marquee inline-block font-bold text-green-700">
            Welcome to Yorn|Porfolio. We hope you happy in our plateform and explore new knowlegde.
        </div>
    </div>
</template>
<script>
import stand from '@/assets/photo/stand.jpg'; // @ = src/
export default {
  data() {
    return {
      stand
    };
  },
};
</script>
