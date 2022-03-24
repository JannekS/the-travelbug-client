<template>
  <div class="login-container">
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
        "If you have an account, you will be able to create your own posts an blog about your travel experiences...",
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media only screen and (min-width: 800px) {
  .login-container {
    max-width: 2800px;
  }
  @media only screen and (min-width: 2800px) {
    .login-container {
      margin: auto;
    }
  }
}
</style>
