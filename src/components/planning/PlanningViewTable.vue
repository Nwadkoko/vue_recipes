<template>
  <table>
    <thead>
      <tr>
        <th v-for="day in days" :key="day">{{ day }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="n in 2" :key="n">
        <th>{{ n === 2 ? "Après-Midi" : "Matin" }}</th>
        <td v-for="m in 5" :key="m">{{ randomRecipes().name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      days: ["", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    };
  },
  inject: {
    recipes: {
      from: "recipes",
    },
  },
  methods: {
    randomRecipes() {
      return this.recipes[Math.floor(Math.random() * this.recipes.length)];
    },
  },
};
</script>

<style scoped>
table {
  @apply table-auto w-4/5 mx-auto;
}
thead {
  @apply bg-purple;
}
th {
  @apply text-green;
}
</style>
