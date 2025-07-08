<template>
  <article class="group">
    <h1 class="text-center text-blue-500 text-5xl m-6 font-bold">Web Developer and Designer</h1>
    <p class="m-3 text-2xl">In today’s digital world, having a professional and functional 
      website is essential for any business or individual looking to 
      grow online. As a web developer and designer, I offer 
      complete services to help bring your ideas to life 
      through clean, modern, and responsive websites.

      My work combines the power of web development with 
      creative design. On the development side, I build fast, secure, 
      and fully responsive websites using technologies like HTML, CSS, JavaScript, 
      Vue.js, and Tailwind CSS. Whether you need a portfolio, e-commerce site, or business 
      landing page, I can develop it from start to finish.</p>
  </article>
  <div class="justify-center flex gap-6 p-4 font-family: 'Times New Roman', Times, serif">
      <div class=" mr-100">
        <img class="h-100 w-100 rounded-full" src="https://cdn.prod.website-files.com/659f77ad8e06050cc27ed531/65aae43b53a65594b917685f_eb335287a5ac6ddf52b85563f32e55acd3547c40-2600x1733%20(1).webp"
        alt="development">
        <h1 class="m-2 text-center text-blue-500 text-xl font-bold">Development</h1>
        <p class=" text-center">Web development relies on a variety of tools <br>that help developers write, test, and deploy <br>their projects efficiently. </p>
        <router-link class="ml-35 mt-3 inline-block rounded  bg-blue-600 px-5 py-3 font-medium text-white shadow-xl transition-colors hover:bg-blue-500"
                        to="/commingsoon">
                        View Detail
        </router-link>
        
      </div>
      <div>
        <img class="h-100 w-100 rounded-full" src="https://newborn.media/wp-content/uploads/2021/12/Creative-design.png" alt="design"> 
        <h1 class="m-2 text-center text-blue-500 text-xl font-bold">Design</h1>
         <p class=" text-center">In web development, design includes both UI<br> (User Interface) and UX (User Experience). </p>
         <router-link class="ml-35 mt-3 inline-block rounded  bg-blue-600 px-5 py-3 font-medium text-white shadow-xl transition-colors hover:bg-blue-500"
                        to="/commingsoon">
                        View Detail
        </router-link>
      </div>
  </div>
</template>