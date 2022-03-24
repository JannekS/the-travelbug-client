<template>
  <div id="map-wrapper">
    <GMapMap
      :center="center"
      :zoom="4"
      :options="options"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GMapMarker
        :key="index"
        v-for="(post, index) in blogPosts"
        :position="{ lat: post.lat, lng: post.lng }"
        :clickable="true"
        @click="openInfoWindow(post.id)"
      >
        <GMapInfoWindow
          :closeclick="true"
          @closeclick="openInfoWindow(null)"
          :opened="openedPostId === post.id"
        >
          <div><PostInfoWindow :blogPost="post" /></div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>

<script>
import PostInfoWindow from "@/components/PostInfoWindow.vue";

export default {
  components: {
    PostInfoWindow,
  },
  props: {
    blogPosts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      center: {
        lat: this.blogPosts[0].lat,
        lng: this.blogPosts[0].lng,
      },
      openedPostId: null,
      options: {
        minZoom: 2,
        restriction: {
          latLngBounds: {
            north: 85,
            south: -85,
            east: 179.99,
            west: -179.99,
          },
          strictBounds: true,
        },
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
  methods: {
    openInfoWindow(id) {
      this.openedPostId = id;
    },
  },
};
</script>

<style scoped>
#map-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
}

.vue-map-container {
  width: 100%;
  height: 100%;
}
</style>
