const state = {
  animationMethod: "replacement",
  animationDelay: 1000,
  animationDuration: 1,
  defaultColors: {
    tree: "darkblue"
  },
  colors: [
    "#7CFC00",
    "#FFFF00",
    "#FF1493",
    "#32CD32",
    "#FF0000",
    "#FFA500",
    "#FF00FF"
  ]
};

const getters = {};

const mutations = {
  changeSettings(state, newSettings) {
    state.animationMethod = newSettings.animationMethod;
    state.animationDelay = newSettings.animationDelay;
    state.animationDuration = newSettings.animationDuration;
    state.colors = newSettings.colors;
  }
};

const actions = {
  changeSettings({ commit }, newSettings) {
    commit("changeSettings", newSettings);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
