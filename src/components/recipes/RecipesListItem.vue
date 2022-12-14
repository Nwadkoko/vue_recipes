<template>
  <li>
    <base-card>
      <h3>{{ name }}</h3>
      <div class="sm:absolute sm:right-2 sm:inline-block">
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
      <div>
        <img
          :src="picture ? picture : 'require(@/assets/pan-ga3e09ee7a_640.jpg)'"
        />
      </div>
      <base-card
        ><ol>
          <li v-for="step in steps" :key="step">{{ step }}</li>
        </ol></base-card
      >
    </base-card>
  </li>
</template>

<script>
export default {
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
  },
};
</script>

<style scoped>
h3 {
  @apply inline-block w-2/5 md:w-3/5 truncate;
}
</style>
