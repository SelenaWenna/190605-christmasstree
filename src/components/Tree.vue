<template>
  <svg
    class="tree"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 146.2 195"
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
    <component
      v-for="branch in animationModel"
      :key="branch.name"
      :is="branch.name"
      :color="getColor(branch, 'tree')"
      :style="{ transition: 'fill 0.3s ease-in-out' }"
    />
  </svg>
</template>

<script>
import { mapState } from "vuex";

const branches = {};
const ComponentContext = require.context(
  "../components/branches/",
  false,
  /\.vue$/i
);
ComponentContext.keys().forEach(componentFilePath => {
  const componentName = componentFilePath
    .split("/")
    .pop()
    .split(".")[0];
  branches[componentName] = async () =>
    await import("../components/branches/" + componentName);
});

export default {
  data: () => ({
    colorOffset: 0,
    animationModel: []
  }),
  components: {
    ...branches
  },
  created() {
    this.animationModel = Object.keys(branches).map((branch, index) => ({
      name: branch,
      off: false,
      color: this.computeItemColor(index)
    }));
    this.colorizeTree();
  },
  computed: {
    ...mapState("settings", [
      "animationObject",
      "animationMethod",
      "animationDuration",
      "defaultColors",
      "colors"
    ]),
    colorsNumber() {
      return this.colors.length;
    }
  },
  methods: {
    colorizeTree() {
      switch (this.animationMethod) {
        case "onOff":
          this.colorOffset = 0;
          this.animationModel.forEach((element, index) => {
            element.off = !element.off;
            element.color = this.computeItemColor(index);
          });
          break;
        case "replacement":
          this.colorOffset += 1;
          this.animationModel.forEach((element, index) => {
            element.off = false;
            element.color = this.computeItemColor(index);
          });
          break;
        case "сombined":
          this.colorOffset += 1;
          this.animationModel.forEach((element, index) => {
            element.off = !element.off;
            element.color = this.computeItemColor(index);
          });
          break;

        default:
          break;
      }
      setTimeout(this.colorizeTree, this.animationDuration);
    },
    computeItemColor(index) {
      if (index < this.animationModel.length && this.animationModel[index].off) {
        return this.defaultColors["tree"];
      }
      let currentColorIndex = index + this.colorOffset;
      while (currentColorIndex >= this.colorsNumber) {
        currentColorIndex -= this.colorsNumber;
      }
      if (currentColorIndex < 0) {
        currentColorIndex = 0;
      }
      return this.colors[currentColorIndex];
    },
    getColor(value, colorizeObject) {
      if (this.animationObject === colorizeObject) {
        const branch = this.animationModel.find(branch => branch === value)
        return branch ? branch.color : this.defaultColors[colorizeObject];
      }
      return this.defaultColors[colorizeObject];
    },
  }
};
</script>

<style lang="scss" scoped>
.tree {
  height: calc(100vh - 50px);
  width: 100%;
}
</style>
