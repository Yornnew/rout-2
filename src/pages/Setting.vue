<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
  
        <p class="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>
      <div class="flex flex-wrap mt-4 mb-4 gap-2">
        <RouterLink class="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        to="/setting"> Collection </RouterLink>

        <router-link class="inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
        to="/setting/pricing"> Pricing </router-link>
      
        <Router-view/>

      </div>
        
    </div>
  </section>
</template>
<script>
import Collection from '@/components/Collection.vue';

export default {
    components: {
        Collection
        
    },
}
</script>

