<template>
  <polygon
    :fill="color"
    points="57.4,108.1 58.5,107.5 57.3,108 59,106 57.2,107.9 57.7,106.5 57.1,107.8 57.1,103.5 56.9,107.8
		56.4,106.5 56.8,107.8 55.1,105.9 56.7,108 55.5,107.5 56.6,108.1 52.9,108.1 56.6,108.3 55.5,108.9 56.7,108.4 55,110.4
		56.8,108.5 56.3,109.9 56.9,108.7 56.9,112.9 57.1,108.6 57.6,110 57.2,108.6 58.9,110.6 57.3,108.4 58.5,109 57.4,108.3
		61.1,108.3 	"
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
