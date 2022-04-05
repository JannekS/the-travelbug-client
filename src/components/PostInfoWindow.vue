<template>
  <div class="info-window">
    <h3>{{ blogPost.title }}</h3>
    <div>
      <div class="date">
        <img src="/icons/calendar.svg" alt="Date: " />
        <p>
          {{ blogPost.tripDuration }}
        </p>
      </div>
    </div>
    <div class="read-more">
      <div class="author-info">
        <div class="author-img">
          <img :src="blogPost.author.image" alt="author image" />
        </div>
        <p>{{ blogPost.author.name }}</p>
      </div>
      <router-link :to="detailPage">
        <img id="link-arrow" src="/icons/arrow-right.svg" /> Read
        post</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogPost: {},
  },
  data: function () {
    return {
      detailPage: `/post/${this.blogPost.id}`,
    };
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  text-decoration: underline;
}

.info-window {
  width: 200px;
  padding: 0 10px;
}
.read-more {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.author-info {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.author-img {
  height: 30px;
  width: 30px;
}

.author-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.date {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}

.date p {
  vertical-align: middle;
  margin: 0 10px;
  padding: 0;
}

.date img {
  vertical-align: middle;
  height: 25px;
}

#link-arrow {
  height: 1rem;
  margin: 0;
  vertical-align: middle;
}
</style>
