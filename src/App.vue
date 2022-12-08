<template>
  <the-header></the-header>
  <main>
    <recipes-list :recipes="recipes"></recipes-list>
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import RecipesList from "./components/recipes/RecipesList.vue";

import recipes from "./assets/recipes.json";
export default {
  components: {
    TheHeader,
    RecipesList,
  },
  data() {
    return {
      recipes: recipes,
    };
  },
};
</script>

<style scoped></style>
