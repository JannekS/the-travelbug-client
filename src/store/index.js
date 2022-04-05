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
    },
  },
  actions: {
    login(context, payload) {
      context.commit("login", payload);
    },
    logout(context) {
      context.commit("logout");
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
  },
  plugins: [vuexLocal.plugin],
});

export default store;
