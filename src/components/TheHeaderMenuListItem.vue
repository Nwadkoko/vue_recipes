<template>
  <li>
    <router-link :to="path">{{ name }}</router-link>
  </li>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    path: {
      required: false,
      type: String,
    },
  },
  components: { RouterLink },
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
