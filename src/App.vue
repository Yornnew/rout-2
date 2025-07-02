<template>
  <HyperHeader v-if="$route.name != 'Unfond'"/>
  <router-view/>
  <HyperFooter v-if="$route.name != 'Unfond'"/>
</template>
<script>
import HyperHeader from './components/HyperHeader.vue';
import HyperFooter from './components/HyperFooter.vue';
export default {
  components: {
  
    HyperHeader,
    HyperFooter
  }
}
</script>