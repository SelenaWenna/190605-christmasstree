<template>
  <polygon
    :fill="color"
    points="27.1,159.3 28.5,158.5 27,159.2 29.1,156.6 26.8,159 27.4,157.3 26.7,158.8 26.8,153.5 26.5,158.9
		25.8,157.2 26.4,159 24.2,156.5 26.2,159.2 24.7,158.5 26.1,159.3 21.5,159.3 26.1,159.6 24.7,160.3 26.2,159.7 24.1,162.2
		26.4,159.8 25.8,161.6 26.4,160 26.4,165.3 26.7,160 27.3,161.6 26.8,159.9 29,162.4 27,159.7 28.5,160.4 27.1,159.6 31.7,159.6
		"
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
