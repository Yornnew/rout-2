<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      
      <h1 class="mt-4 text-3xl font-semibold tracking-tight text-balance text-green-500 sm:text-7xl">This Content will be comming soon</h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Please wait to explore news.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link to="/services" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</router-link>
        <router-link to="/" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></router-link>
      </div>
    </div>
  </main>
</template>
