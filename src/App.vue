<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './views/layout/Header.vue'
import Footer from './views/layout/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>
</style>
