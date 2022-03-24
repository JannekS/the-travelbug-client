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
      message:
        "If you are logged in as a user, you will be able to create your own blog post on this page :-)",
    };
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
