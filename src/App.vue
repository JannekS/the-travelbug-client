<template>
  <div id="app-container">
    <Header />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
/* import Footer from "@/components/Footer.vue"; */

export default {
  components: {
    Header,
    /* Footer, */
  },
};
</script>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#app-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
}
</style>
