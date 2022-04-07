<template>
  <div id="app-container">
    <TheHeader />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
/* import Footer from "@/components/layout/TheFooter.vue"; */

export default {
  components: {
    TheHeader,
    /* TheFooter, */
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
