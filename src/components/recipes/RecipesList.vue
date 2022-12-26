<template>
  <ul>
    <recipes-list-item
      v-for="recipe in recipes"
      :key="recipe.id"
      :name="recipe.name"
      :difficulty="recipe.difficulty"
      :cost="recipe.cost"
      :steps="recipe.steps"
      :picture="recipe.picture"
    ></recipes-list-item>
  </ul>
</template>

<script>
import RecipesListItem from "./RecipesListItem.vue";

export default {
  components: {
    RecipesListItem,
  },
  inject: {
    recipes: {
      from: "recipes",
    },
  },
};
</script>

<style scoped>
ul {
  @apply grid grid-cols-4 gap-8 mx-12;
}
</style>
