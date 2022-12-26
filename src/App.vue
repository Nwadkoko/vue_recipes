<template>
  <the-header></the-header>
  <main>
    <router-view v-if="!loading"></router-view>
    <loading-circle v-else></loading-circle>
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import LoadingCircle from "./components/LoadingCircle.vue";

import { supabase } from "./db/supabase";
import { computed } from "vue";

export default {
  components: {
    TheHeader,
    LoadingCircle,
  },
  data() {
    return {
      loading: false,
      recipes: [],
    };
  },
  provide() {
    return {
      recipes: computed(() => this.recipes),
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        let { data, error, status } = await supabase
          .from("recipes")
          .select("*");

        if (error && status !== 406) throw error;

        if (data) {
          this.recipes = data;
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
