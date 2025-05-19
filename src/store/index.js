import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    drawer: true,
  },
  mutations: {
    setUser(state) {
      state.user = state;
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
  },
  actions: {
    login({ commit }, user) {
      commit("setUser", user);
    },
    switchDrawer({ commit }, drawer) {
      commit("SET_DRAWER", drawer);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
