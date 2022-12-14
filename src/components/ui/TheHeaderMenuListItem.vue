<template>
  <li @click="tabChange(component)">
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
    component: {
      required: true,
      type: String,
    },
  },
  inject: {
    tab: {
      from: "tab",
    },
    tabChange: {
      from: "tabChange",
    },
  },
  methods: {
    handleClick(name) {
      this.tab = name;
      console.log(this.tab);
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
