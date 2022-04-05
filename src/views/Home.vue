<template>
  <main>
    <div class="main-container" v-if="blogPostData">
      <Previews :blogPosts="blogPostData" />
      <div id="map-wrapper">
        <TravelMap :blogPosts="blogPostData" />
      </div>
    </div>
    <div class="main-container" v-else>
      <Loading />
    </div>
  </main>
</template>

<script>
import Previews from "@/components/Previews.vue";
import TravelMap from "@/components/TravelMap.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "Home",
  components: {
    Previews,
    TravelMap,
    Loading,
  },
  data: function () {
    return {
      blogPostData: undefined,
      serverURL: process.env.VUE_APP_SERVER_URL,
    };
  },
  mounted: async function () {
    const url = `${this.serverURL}/posts`;
    try {
      const response = await fetch(url);
      const result = await response.json();

      this.blogPostData = result;
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
body {
  background-image: url(/img/bg-image.jpg);
  background-repeat: repeat-y;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Lato", sans-serif;
  color: #4a3933;
}

a:link,
a:visited {
  color: #4a3933;
  text-decoration: none;
}

a:hover span {
  font-weight: bold;
  font-size: 1.1rem;
}

a:hover h2 {
  text-decoration: underline;
}

body::after {
  content: "";
  position: fixed;
  display: block;
  background-color: antiquewhite;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: -10;
}

.main-container {
  margin-top: 10px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#map-wrapper {
  display: none;
}

@media only screen and (min-width: 800px) {
  .main-container {
    min-width: 550px;
    padding: 20px;
    max-width: 2800px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: 2800px) {
    .main-container {
      margin: auto;
    }
  }

  #map-wrapper {
    display: flex;
    width: 49%;
    height: 85vh;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
