<template>
  <polygon
    :fill="color"
    points="102,143.2 103.4,142.5 101.9,143.1 104.1,140.6 101.7,142.9 102.3,141.2 101.7,142.8 101.7,137.4
		101.4,142.8 100.8,141.2 101.3,142.9 99.1,140.4 101.1,143.1 99.6,142.4 101,143.2 96.4,143.2 101,143.5 99.6,144.2 101.1,143.6
		99,146.1 101.3,143.8 100.7,145.5 101.4,143.9 101.3,149.3 101.6,143.9 102.3,145.5 101.7,143.8 103.9,146.3 101.9,143.6 
		103.4,144.3 102,143.5 106.6,143.5 	"
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
