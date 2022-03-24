<template>
  <div class="post-prev">
    <div class="post-img">
      <router-link :to="detailPage"
        ><img :src="blogPost.image" alt="Image of Destination"
      /></router-link>
    </div>
    <div class="prev-content">
      <router-link :to="detailPage"
        ><h2 class="post-title">
          {{ blogPost.title }}
        </h2></router-link
      >
      <div class="meta-data">
        <div class="date-location">
          <div>
            <img src="/icons/map-pin.svg" alt="Location: " />
            <p>{{ blogPost.city }} | {{ blogPost.country }}</p>
          </div>
          <div>
            <img src="/icons/calendar.svg" alt="Date: " />
            <p>
              {{ blogPost.trip_duration }}
            </p>
          </div>
        </div>
        <div class="author-info">
          <div class="author-img">
            <img :src="blogPost.author_image" alt="author-img" />
          </div>
          <p>{{ blogPost.author_name }}</p>
        </div>
      </div>
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
.post-prev {
  height: 480px;
  width: 320px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  margin: auto;
  flex-basis: auto;
  box-shadow: 10px 5px 5px rgb(98, 98, 98);
}

.prev-content {
  margin-top: 25px;
}

@media only screen and (min-width: 600px) {
  .post-prev {
    width: 400px;
  }
}

@media only screen and (min-width: 800px) {
  .post-prev {
    width: 350px;
  }
}

@media only screen and (min-width: 1000px) {
  .post-prev {
    width: 400px;
  }
}

@media only screen and (min-width: 1650px) {
  .post-prev {
    width: 350px;
  }
}

@media only screen and (min-width: 1900px) {
  .post-prev {
    width: 400px;
  }
}

.post-img {
  height: 50%;
  width: 100%;
}

.post-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.post-img img:hover {
  cursor: pointer;
}

.post-title:hover {
  cursor: pointer;
}

.meta-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.date-location {
  width: 55%;
  display: flex;
  flex-direction: column;
}

.date-location div {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}

.date-location img {
  height: 25px;
  vertical-align: middle;
}

.date-location p {
  vertical-align: middle;
  margin: 0 10px;
  padding: 0;
}

.author-info {
  /* width: 40%; */
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.author-img {
  height: 50px;
  width: 50px;
}

.author-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
