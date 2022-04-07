<template>
  <div id="prev-wrapper">
    <div id="post-previews" v-for="(post, i) in blogPosts" :key="i">
      <PostPreviewCard :blogPost="post" />
    </div>
  </div>
</template>

<script>
import PostPreviewCard from "../post/PostPreviewCard.vue";

export default {
  components: {
    PostPreviewCard,
  },
  props: {
    blogPosts: Array,
  },
};
</script>

<style scoped>
#prev-wrapper {
  width: 100%;
  min-width: 300px;
  height: 85vh;
  margin: 0;
  padding-bottom: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
}

@media only screen and (min-width: 800px) {
  #prev-wrapper {
    width: 49%;
    margin-left: 0;
    padding-bottom: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
