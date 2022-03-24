<template>
  <div class="scroll-wrapper">
    <div class="detail-wrapper">
      <div class="blog-post">
        <h1>{{ blogPost.title }}</h1>
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

        <div class="post-img">
          <img :src="blogPost.image" alt="Image of Destination" />
        </div>
        <div class="main-text">
          {{ blogPost.text }}
        </div>
      </div>
      <div class="map-wrapper">
        <GMapMap
          :center="geo"
          :zoom="10"
          :options="options"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
        >
          <GMapMarker :position="geo" />
        </GMapMap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogPost: {},
    geo: {},
  },
  data() {
    return {
      options: {
        minZoom: 4,
        restriction: {
          latLngBounds: {
            north: 85,
            south: -85,
            east: 179.99,
            west: -179.99,
          },
          strictBounds: true,
        },
        draggable: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#cde8eb" /* "#b8dadd" */,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#92998d",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.scroll-wrapper {
  width: 100%;
  height: 85vh;
  overflow-y: auto;
}
.detail-wrapper {
  max-width: 1100px;
  margin: 0 10px 10px 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgb(98, 98, 98);
  background-color: white;
}

@media only screen and (min-width: 1150px) {
  .detail-wrapper {
    padding-left: 40px;
    padding-right: 40px;
    margin-left: auto;
    margin-right: auto;
  }
}

.meta-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.1rem;
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

.post-img {
  height: 250px;
  width: 100%;
  margin: 20px 0;
}

.map-wrapper {
  width: 100%;
  height: 200px;
  margin: 20px 0px;
  border-radius: 10px;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .post-img {
    height: 400px;
    width: 100%;
    margin: 20px 0;
  }

  .map-wrapper {
    width: 100%;
    height: 400px;
    margin: 20px 0px;
    border-radius: 10px;
    overflow: hidden;
  }
}

.post-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.main-text {
  white-space: pre-line;
  font-size: 1.2rem;
}

.vue-map-container {
  width: 100%;
  height: 100%;
}
</style>
