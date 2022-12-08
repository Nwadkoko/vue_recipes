<template>
  <li>
    {{ name }}
  </li>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
li {
  @apply basis-1/3 border-r-2 hover:text-white hover:cursor-pointer;
}
li:last-child {
  border: none;
}
</style>
