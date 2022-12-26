<template>
  <li>
    <base-card>
      <h3>{{ name }}</h3>
      <div>
        <span>Difficulté</span>
        <div class="sm:absolute sm:right-8 sm:inline-block">
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
      </div>
      <div>
        <span>Coût</span>
        <div class="sm:absolute sm:right-8 sm:inline-block">
          <font-awesome-icon
            icon="fa-solid fa-circle"
            class="text-blue"
            v-for="n in cost"
            :key="n"
          />
          <font-awesome-icon
            icon="fa-solid fa-circle"
            class="text-white"
            v-for="n in 5 - cost"
            :key="n"
          />
        </div>
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
    picture: {
      required: false,
      type: String,
    },
    steps: {
      required: false,
      type: Array,
    },
    cost: {
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
  @apply inline-block w-2/5 md:w-3/5 truncate;
}
</style>
