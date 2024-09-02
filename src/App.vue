<template>
  <div>
  <div v-if="!isAdminPanel">
    <Navbar />
  </div>
    <div class="page-content">

  </div>
  <footer v-if="!isAdminPanel">
    <Footer />
  </footer>
  </div>
</template>

<script>
import Navbar from '@/components/UI/Navbar.vue';
import Footer from '@/components/UI/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    isAdminPanel() {
      return window.location.pathname === '/admin';
    }
  },
}
</script>

<style>

</style>