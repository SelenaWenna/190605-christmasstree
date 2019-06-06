<template>
  <svg
    class="easel"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 150 195"
  >
    <radialGradient id="stand" cx="50%" cy="50%" r="33%">
      <stop offset="0%" style="stop-color: #001124" />
      <stop offset="70%" style="stop-color: #002957" />
      <stop offset="100%" style="stop-color: #003570" />
    </radialGradient>
    <ellipse
      fill="url(#stand)"
      class="stand"
      rx="33%"
      ry="5%"
      cx="53%"
      cy="93%"
    />
    <tree class="tree" v-if="!$store.state.settings.hideTree" />
    <garland />
  </svg>
</template>

<script>
import Tree from "./Tree";
import Garland from "./Garland";

export default {
  components: {
    Tree,
    Garland
  }
};
</script>

<style lang="scss" scoped>
.easel {
  height: calc(100vh - 50px);
  min-height: 165px;
  width: 100%;
  display: block;
  margin: 0 auto;
}
.tree {
  transform: translate(-6%, 11%);
}
</style>
