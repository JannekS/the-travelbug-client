import { createStore } from "vuex";
import VuexPersist from "vuex-persist";

const vuexLocal = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
});

const store = createStore({
  state() {
    return {
      userId: null,
      authToken: null,
      isLoggedIn: false,
      postDraft: {
        location: null,
        country: null,
        coordinates: {
          lat: null,
          lng: null,
          text: "",
        },
        startDate: null,
        endDate: null,
        image: null,
        title: null,
        mainText: "",
        authorId: null,
      },
    };
  },
  mutations: {
    // mutations must be synchronous
    login(state, payload) {
      state.userId = payload.userId;
      state.authToken = payload.token;
      state.isLoggedIn = payload.isAuth;
    },
    logout(state) {
      state.userId = null;
      state.authToken = null;
      state.isLoggedIn = false;
      state.postDraft = {
        location: null,
        country: null,
        coordinates: {
          lat: null,
          lng: null,
          text: "",
        },
        startDate: null,
        endDate: null,
        image: null,
        title: null,
        mainText: "",
        authorId: null,
      };
    },
    updatePost(state, payload) {
      state.postDraft = payload;
    },
  },
  actions: {
    login(context, payload) {
      context.commit("login", payload);
    },
    logout(context) {
      context.commit("logout");
    },
    updatePostDraft(context, payload) {
      context.commit("updatePost", payload);
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    authToken(state) {
      return state.authToken;
    },
    userLoggedIn(state) {
      return state.isLoggedIn;
    },
    postDraft(state) {
      return state.postDraft;
    }
  },
  plugins: [vuexLocal.plugin],
});

export default store;
