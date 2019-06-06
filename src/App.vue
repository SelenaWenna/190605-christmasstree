<template>
  <div id="app">
    <nav>
      <button
        v-for="tab in tabs"
        v-bind:key="tab.component"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab.title }}
      </button>
    </nav>

    <component v-bind:is="currentTab.component" class="tab"></component>
  </div>
</template>

<script>
import Easel from "./components/Easel";
import Settings from "./components/Settings";

const tabs = [
  {
    title: "Дерево",
    component: "Easel"
  },
  {
    title: "Настройки",
    component: "Settings"
  }
];
export default {
  name: "app",
  components: {
    Easel,
    Settings
  },
  data: () => ({
    tabs: tabs,
    currentTab: tabs[0]
  })
};
</script>

<style lang="scss">
body {
  background: #87cefa;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  min-height: 100vh;
  min-width: 300px;
  min-height: 240px;
  max-width: 100%;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #001d3d;
  color: lighten(#87cefa, 20%);
  cursor: pointer;
  background: lighten(#001d3d, 5%);
  margin-bottom: -1px;
  margin-right: -1px;
  &:focus {
    outline: none;
  }
  &:hover,
  &.active {
    background: #001d3d;
  }
}
.tab {
  border: 1px solid #001d3d;
  padding: 10px;
  box-sizing: border-box;
  display: block;
  background: radial-gradient(lighten(#001d3d, 30%), darken(#001d3d, 5%));
  min-height: calc(100vh - 50px);
  overflow: hidden;
}
</style>
