<template>
  <the-header @tab-clicked="tabHandler"></the-header>
  <main>
    <component :is="tab" :recipes="recipes"></component>
  </main>
</template>

<script>
import TheHeader from "./components/ui/TheHeader.vue";
import RecipesList from "./components/recipes/RecipesList.vue";

import recipes from "./assets/recipes.json";
export default {
  components: {
    TheHeader,
    RecipesList,
  },
  provide() {
    return {
      tab: this.tab,
      tabChange: (name) => {
        this.tab = name;
      },
    };
  },
  data() {
    return {
      recipes: recipes,
      tab: "recipes-list",
    };
  },
  methods: {
    tabHandler(tab) {
      console.log(tab);
    },
  },
};
</script>

<style scoped></style>
