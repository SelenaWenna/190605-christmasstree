<template>
  <div>
    <label for="hideTree" class="setting">
      <input type="checkbox" v-model="hideTree" name="hideTree" id="hideTree" />
      Скрыть дерево (Показывать только гирлянду)
    </label>
    <fieldset class="settings-group">
      <legend>Настройки анимации</legend>
      <label for="animationDelay" class="setting">
        <input
          type="number"
          v-model="animationDelay"
          name="animationDelay"
          id="animationDelay"
        />
        секунд задержка анимации
      </label>
      <label for="animationDuration" class="setting">
        <input
          type="number"
          v-model="animationDuration"
          name="animationDuration"
          id="animationDuration"
        />
        секунд длительность анимации
      </label>
    </fieldset>
    <fieldset class="settings-group">
      <legend>Метод анимации</legend>
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
      <label for="track" class="setting">
        <input
          type="radio"
          v-model="animationMethod"
          name="animationMethod"
          value="track"
          id="track"
        />
        Чередование лампочек
      </label>
    </fieldset>
    <fieldset class="settings-group">
      <legend>Цвета</legend>
      <div class="panel">
        <button @click="addColor">Добавить</button>
      </div>
      <div class="colors">
        <span v-for="(color, index) in colors" :key="index">
          <input
            class="d-block"
            type="color"
            v-model="colors[index]"
            name="bg"
          />
          <button class="d-block" @click="removeColor(index)">x</button>
        </span>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapActions } from "vuex";

const defaultColor = "#ff0000";

export default {
  data: () => ({
    hideTree: false,
    animationMethod: "",
    animationDelay: 0,
    animationDuration: 0,
    colors: []
  }),
  created() {
    this.hideTree = this.$store.state.settings.hideTree;
    this.animationMethod = this.$store.state.settings.animationMethod;
    this.animationDelay = this.$store.state.settings.animationDelay / 1000;
    this.animationDuration = this.$store.state.settings.animationDuration;
    this.colors.length = 0;
    this.colors = this.$store.state.settings.colors;
  },
  beforeDestroy() {
    this.changeSettings({
      hideTree: this.hideTree,
      animationMethod: this.animationMethod,
      animationDelay: +this.animationDelay * 1000,
      animationDuration: +this.animationDuration,
      colors: this.colors
    });
  },
  methods: {
    ...mapActions("settings", ["changeSettings"]),
    addColor() {
      this.colors.push(defaultColor);
    },
    removeColor(index) {
      this.colors.splice(index, 1);
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
.colors {
  display: flex;
}
.d-block {
  display: block;
  margin: 0 auto;
}
</style>
