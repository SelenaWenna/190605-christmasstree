const state = {
  animationObject: "tree",
  animationMethod: "replacement",
  animationDuration: 1500,
  displayGarland: false,
  defaultColors: {
    tree: "yellowgreen",
    garland: "red"
  },
  colors: [
    "#FFE4E1",
    "#E6E6FA",
    "#F0FFF0",
    "#87CEFA",
    "#00FFFF",
    "#00FF7F",
    "#ADFF2F",
    "#EEE8AA",
    "#CD5C5C",
    "#F4A460",
    "#FA8072",
    "#FFB6C1",
    "#DB7093",
    "#EE82EE",
    "#7FFFD4"
  ]
};

const getters = {};

const mutations = {
  changeSettings(state, newSettings) {
    state.animationObject = newSettings.animationObject;
    state.animationMethod = newSettings.animationMethod;
    state.animationDuration = newSettings.animationDuration;
    state.displayGarland = newSettings.displayGarland;
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
