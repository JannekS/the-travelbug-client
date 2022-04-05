import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAPS_API_KEY,
  },
});

app.mount("#app");
