<template>
  <div>
    <fieldset class="settings-group">
      <legend>Объект анимации</legend>
      <label for="garland" class="setting">
        <input
          type="radio"
          v-model="animationObject"
          name="animationObject"
          value="garland"
          id="garland"
          @change="setDisplayGarland"
        />
        Анимация гирлянды
      </label>
      <label for="tree" class="setting">
        <input
          type="radio"
          v-model="animationObject"
          name="animationObject"
          value="tree"
          id="tree"
          @change="setDisplayGarland"
        />
        Анимация дерева
      </label>
      <label for="displayGarland" class="setting">
        <input
          type="checkbox"
          v-model="displayGarland"
          name="displayGarland"
          value="displayGarland"
          id="displayGarland"
          :disabled="animationObject === 'garland'"
        />
        Отображать гирлянду
      </label>
    </fieldset>
    <fieldset class="settings-group">
      <legend>Длительность анимации</legend>
      <label for="animationDuration" class="setting">
        <input
          type="number"
          v-model="animationDuration"
          name="animationDuration"
          id="animationDuration"
        />
        ms
      </label>
    </fieldset>
    <fieldset class="settings-group">
      <legend>Метод анимации</legend>
      <label for="onOff" class="setting">
        <input
          type="radio"
          v-model="animationMethod"
          name="animationMethod"
          value="onOff"
          id="onOff"
        />
        Включение / Выключение
      </label>
      <label for="replacement" class="setting">
        <input
          type="radio"
          v-model="animationMethod"
          name="animationMethod"
          value="replacement"
          id="replacement"
        />
        Замена цвета
      </label>
      <label for="сombined" class="setting">
        <input
          type="radio"
          v-model="animationMethod"
          name="animationMethod"
          value="сombined"
          id="сombined"
        />
        Комбинированный
      </label>
    </fieldset>
    <fieldset class="settings-group">
      <legend>Цвета</legend>
      <div class="panel">
        <button @click="addColor">Добавить</button>
      </div>
      <input
        v-for="(color, index) in colors"
        :key="index"
        type="color"
        name="bg"
        :value="color"
      />
    </fieldset>
  </div>
</template>

<script>
import { mapActions } from "vuex";

const defaultColor = "#ff0000";

export default {
  data: () => ({
    animationObject: "",
    animationMethod: "",
    animationDuration: 0,
    displayGarland: false,
    colors: []
  }),
  created() {
    this.animationObject = this.$store.state.settings.animationObject;
    this.animationMethod = this.$store.state.settings.animationMethod;
    this.animationDuration = this.$store.state.settings.animationDuration;
    this.displayGarland = this.$store.state.settings.displayGarland;
    this.colors = this.$store.state.settings.colors;
  },
  beforeDestroy() {
    this.changeSettings({
      animationObject: this.animationObject,
      animationMethod: this.animationMethod,
      animationDuration: this.animationDuration,
      displayGarland: this.displayGarland,
      colors: this.colors
    });
  },
  methods: {
    ...mapActions("settings", ["changeSettings"]),
    addColor() {
      this.colors.push(defaultColor);
    },
    setDisplayGarland() {
      this.displayGarland = this.animationObject === "tree" ? false : true;
    }
  }
};
</script>

<style lang="scss" scoped>
.setting {
  display: block;
  color: lighten(#87cefa, 20%);
}
.settings-group {
  color: #87cefa;
}
</style>
