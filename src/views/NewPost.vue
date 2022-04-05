<template>
  <div class="new-post-container">
    <BackHome />
    <CommingSoon :message="message" />
  </div>
</template>

<script>
import BackHome from "@/components/BackHome.vue";
import CommingSoon from "@/components/CommingSoon.vue";
export default {
  components: {
    CommingSoon,
    BackHome,
  },
  data() {
    return {
      message: "",
    };
  },
  mounted: async function () {
    const url = "http://localhost:3000/new-post";
    try {
      const response = await fetch(url, {
        headers: { Authorization: "Bearer " + this.$store.getters.authToken },
      });
      const result = await response.json();
      this.message = result.message;
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  },
};
</script>

<style scoped>
.new-post-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media only screen and (min-width: 800px) {
  .new-post-container {
    max-width: 2800px;
  }
  @media only screen and (min-width: 2800px) {
    .new-post-container {
      margin: auto;
    }
  }
}
</style>
