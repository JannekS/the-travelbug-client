<template>
  <div>
    <BackHome />
    <div v-if="pageLoaded">
      <div v-if="status === 'OK'">
        <PostDetail :blogPost="blogPost" :geo="geo" />
      </div>
      <div v-else>
        <FourOFour />
      </div>
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script>
import PostDetail from "@/components/post/PostDetail.vue";
import FourOFour from "@/components/FourOFour.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import BackHome from "@/components/BackHome.vue";

export default {
  components: {
    PostDetail,
    FourOFour,
    LoadingSpinner,
    BackHome,
  },
  data: function () {
    return {
      blogPost: {},
      geo: {},
      pageLoaded: false,
      status: String,
      serverURL: process.env.VUE_APP_SERVER_URL,
    };
  },
  methods: {},
  mounted: async function () {
    const postId = Number(this.$route.params.id);
    const url = `${this.serverURL}/post/${postId}`;
    const context = this;
    try {
      const response = await fetch(url);
      const result = await response.json();

      context.blogPost = result;
      context.geo = { lat: result.location.lat, lng: result.location.lng };
      context.pageLoaded = true;
      context.status = response.statusText;
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
