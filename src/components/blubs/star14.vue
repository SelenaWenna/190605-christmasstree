<template>
  <polygon
    :fill="color"
    points="65.4,72.1 66,71.9 65.4,72.1 66.2,71.1 65.3,72 65.6,71.4 65.3,72 65.3,69.9 65.2,72 65,71.4
		65.2,72 64.3,71.1 65.1,72.1 64.5,71.8 65.1,72.1 63.3,72.1 65.1,72.3 64.5,72.5 65.1,72.3 64.3,73.3 65.2,72.4 64.9,73 65.2,72.4
		65.2,74.5 65.3,72.4 65.5,73 65.3,72.4 66.2,73.3 65.4,72.3 66,72.6 65.4,72.3 67.2,72.3 	"
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
