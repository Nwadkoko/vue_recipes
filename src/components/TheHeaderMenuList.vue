<template>
  <ul>
    <the-header-menu-list-item
      v-for="item in menuItems"
      :key="item.id"
      :name="item.name"
    ></the-header-menu-list-item>
  </ul>
</template>

<script>
import TheHeaderMenuListItem from "./TheHeaderMenuListItem.vue";
export default {
  components: {
    TheHeaderMenuListItem,
  },
  props: {
    menuItems: {
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  @apply pt-2 flex flex-row justify-around text-white text-lg text-center;
}
</style>
