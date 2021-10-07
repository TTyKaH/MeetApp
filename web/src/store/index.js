import { createStore } from "vuex";

export default createStore({
  state: {
    user: "",
    isAdmin: {
      type: Boolean,
      default: false,
    },
    modalsStatus: {
      signIn: false,
    },
  },
  mutations: {
    setUser(state, user, role) {
      state.user = user;
      if (role !== "admin") return;
      state.isAdmin = true;
    },
    clearUser(state) {
      state.user = "";
      state.isAdmin = false;
    },
    // TODO: remake to universal function (can't use modal name from arguments)
    toggleSignIn(state) {
      state.modalsStatus.signIn = !state.modalsStatus.signIn;
    },
  },
  actions: {},
  modules: {},
});
