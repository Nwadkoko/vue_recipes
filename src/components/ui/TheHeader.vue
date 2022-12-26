<template>
  <header>
    <nav>
      <the-header-menu-list :menu-items="menu"></the-header-menu-list>
    </nav>
  </header>
</template>

<script>
import TheHeaderMenuList from "./TheHeaderMenuList.vue";

export default {
  name: "the-header",
  components: {
    TheHeaderMenuList,
  },
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Recettes",
          path: "/",
        },
        {
          id: 2,
          name: "Planning",
          path: "/planning",
        },
        {
          id: 3,
          name: "Paramètres",
          path: "/params",
        },
      ],
    };
  },
};
</script>

<style scoped>
header {
  @apply h-12 bg-green flex flex-row justify-around mb-4;
}
h1 {
  @apply inline-block text-black;
}
nav {
  @apply w-full min-h-full;
}
</style>
