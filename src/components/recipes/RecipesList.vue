<template>
  <ul>
    <recipes-list-item
      v-for="recipe in recipes"
      :key="recipe.id"
      :name="recipe.name"
      :difficulty="recipe.difficulty"
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
  props: {
    recipes: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
ul {
  @apply grid grid-cols-3 gap-4 mx-4;
}
</style>
