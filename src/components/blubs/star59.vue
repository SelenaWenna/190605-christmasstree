<template>
  <polygon
    :fill="color"
    points="17.6,163.9 19,163.1 17.5,163.8 19.7,161.2 17.3,163.6 17.9,161.9 17.3,163.5 17.3,158.1 17,163.5
		16.4,161.9 16.9,163.6 14.7,161.1 16.8,163.8 15.3,163.1 16.6,163.9 12,163.9 16.7,164.2 15.2,164.9 16.7,164.3 14.6,166.8 
		16.9,164.5 16.3,166.2 17,164.6 16.9,170 17.2,164.6 17.9,166.2 17.3,164.5 19.5,167 17.5,164.3 19,165 17.6,164.2 22.2,164.2 	"
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
