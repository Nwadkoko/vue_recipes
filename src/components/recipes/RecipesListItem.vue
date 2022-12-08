<template>
  <li>
    <base-card>
      <h3>{{ name }}</h3>
      <div>
        <font-awesome-icon
          icon="fa-solid fa-circle"
          class="text-blue"
          v-for="n in difficulty"
          :key="n"
        />
        <font-awesome-icon
          icon="fa-solid fa-circle"
          class="text-white"
          v-for="n in 5 - difficulty"
          :key="n"
        />
      </div>
    </base-card>
  </li>
</template>

<script>
import BaseCard from "../BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    difficulty: {
      required: false,
      type: Number,
      validator(value) {
        if (1 <= value <= 5) {
          return true;
        } else return false;
      },
    },
  },
};
</script>

<style scoped>
h3 {
  @apply inline-block w-2/3;
}
div {
  @apply inline-block;
}
</style>
