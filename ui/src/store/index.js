import Vue from "vue";
import Vuex from "vuex";

import search from "./search.js";

Vue.use(Vuex);

const EEL = window.eel;

export default new Vuex.Store({
  state: {
    name: "MRI-VUEWER-UI",
    version: 0.1,
    author: "qh73xe",
    devYear: "2021",
    drawer: false,
  },
  mutations: {
    name: (state, payload) => {
      state.name = payload;
    },
    version: (state, payload) => {
      state.version = payload;
    },
    drawer: function (state, val) {
      state.drawer = val;
    },
  },
  actions: {
    FetchAppInfo: (context) => {
      if (EEL) {
        EEL.app_info()((val) => {
          context.commit("name", val.name);
          context.commit("version", val.version);
        });
      }
    },
  },
  getters: {
    is_eel: () => {
      if (EEL) return true;
      return false;
    },
  },
  modules: {
    search,
  },
});
