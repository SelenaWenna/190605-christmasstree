<template>
  <polygon
    :fill="color"
    points="86.4,175 87.8,174.2 86.3,174.8 88.5,172.3 86.2,174.7 86.8,172.9 86.1,174.5 86.1,169.2
		85.8,174.6 85.2,172.9 85.7,174.6 83.6,172.2 85.6,174.8 84.1,174.2 85.4,174.9 80.8,174.9 85.5,175.2 84,176 85.5,175.4
		83.4,177.9 85.7,175.5 85.1,177.3 85.8,175.7 85.8,181 86.1,175.6 86.7,177.3 86.2,175.6 88.3,178 86.3,175.4 87.8,176 86.4,175.3 
		91,175.3 	"
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
