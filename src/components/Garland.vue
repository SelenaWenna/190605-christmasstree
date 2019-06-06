<template>
  <g>
    <component
      v-for="blub in animationModel"
      :key="blub.name"
      :is="blub.name"
      :color="getColor(blub)"
      :style="{ transition: `fill ${animationDuration}s ease-in-out` }"
    />
  </g>
</template>

<script>
import { mapState } from "vuex";

const blubs = {};
const ComponentContext = require.context("./blubs/", false, /\.vue$/i);
ComponentContext.keys().forEach(componentFilePath => {
  const componentName = componentFilePath
    .split("/")
    .pop()
    .split(".")[0];
  blubs[componentName] = () => import("./blubs/" + componentName);
});

export default {
  data: () => ({
    colorOffset: 0,
    animationModel: []
  }),
  components: {
    ...blubs
  },
  created() {
    this.animationModel = Object.keys(blubs).map((blub, index) => ({
      name: blub,
      off: false,
      color: this.computeItemColor(index, "tree")
    }));
    this.colorize();
  },
  computed: {
    ...mapState("settings", [
      "animationMethod",
      "animationDelay",
      "animationDuration",
      "defaultColors",
      "colors"
    ]),
    colorsNumber() {
      return this.colors.length;
    }
  },
  methods: {
    colorize() {
      const off = !this.animationModel[0].off;
      const remnant = this.animationModel[0].off ? 1 : 0;
      switch (this.animationMethod) {
        case "onOff":
          this.colorOffset = 0;
          this.animationModel.forEach((element, index) => {
            element.off = off;
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
            element.off = off;
            element.color = this.computeItemColor(index);
          });
          break;
        case "track":
          this.colorOffset += 1;
          this.animationModel.forEach((element, index) => {
            element.off = index % 2 === remnant;
            element.color = this.computeItemColor(index);
          });
          break;

        default:
          break;
      }
      setTimeout(this.colorize, this.animationDelay);
    },
    computeItemColor(index) {
      if (
        index < this.animationModel.length &&
        this.animationModel[index].off
      ) {
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
    getColor(value) {
      const item = this.animationModel.find(element => element === value);
      return item ? item.color : this.defaultColors["tree"];
    }
  }
};
</script>
