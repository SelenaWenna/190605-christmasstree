<template>
  <polygon
    :fill="color"
    points="36.2,158.7 37.6,157.9 36.2,158.5 38.3,156 36,158.4 36.6,156.6 35.9,158.2 35.9,152.9 35.7,158.3
		35,156.6 35.5,158.4 33.4,155.9 35.4,158.5 33.9,157.9 35.3,158.6 30.7,158.7 35.3,159 33.9,159.7 35.4,159.1 33.2,161.6
		35.5,159.2 34.9,161 35.6,159.4 35.6,164.7 35.9,159.4 36.5,161 36,159.3 38.1,161.7 36.1,159.1 37.6,159.8 36.3,159 40.8,159 	"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "yellowgreen"
    }
  }
};
</script>
