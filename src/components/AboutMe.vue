<template>
    <div class="flex justify-center gap-6 p-4">
         <!--about me-->
    <div>
        <br>
        <div class=" mt-10 ">
        
            <h1 class=" font-bold text-4xl text-center text-blue-500">About Me</h1>
            <h1 class="font-bold text-2xl">As a web developer</h1>
            <p class="text-xl">Hi, I’m a passionate Web Developer with experience  in building responsive
                <br>and user-friendly websites and web applications.
                 I specialize in front-end <br>technologies like
                HTML, CSS, JavaScript, and modern frameworks 
                <br>such as Vue.js, React, and Tailwind CSS.
            </p><br><br>
            <div class="flex justify-center">
            <table class="table-fixed text-xl">
                <tbody>
                    <tr>
                        <td class="p-1">Name: Yoy Koemyorn</td>
                        <td class="p-1">Degree: Bacherlor</td>
                    
                    </tr>
                    <tr>
                        <td class="p-1">Phone number: +855 12 733 692</td>
                        <td class="p-1">Addreee : st 1986 Phnopenh Cambodia</td>
                        
                    </tr>
                    <tr>
                        <td class="p-1">Birthday : 1 Nov 1800</td>
                        <td class="p-1">Experience : 20 years</td>
                    
                    </tr>
                    <tr>
                        <td class="p-1">Email : kkoemyorn@gmai.com</td>
                    </tr>
                </tbody>
            </table>
           </div>
    
        </div>
    </div>
    <div class="flex flex-wrap justify-center gap-6 p-4">
    
    <!-- Card 1 -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg w-full h-100" :src="seeangkor" alt="angkor" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To commence building a Website or Application, to design it</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        </div>

    <!-- Card 2 -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg w-full h-100" src="https://cdn.sanity.io/images/599r6htc/regionalized/3225dab2b34419e6bc17bf52633ed13b4e86cd6d-3262x1836.jpg?w=1632&q=75&fit=max&auto=format&dpr=1.5" alt="figma" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ai Figma Adobe illustration plateform</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the latest trends in the design tools which you consider it is easy for you to working on it.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        </div>
    </div>
    <!--Card3-->
   
</div>
</template>
<script>
import seeangkor from '@/assets/photo/seeangkor.jpg'; // @ = src/

export default {
  data() {
    return {
      seeangkor,
    };
  },
};
</script>