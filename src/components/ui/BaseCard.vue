<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "base-card",
};
</script>

<style scoped>
div {
  @apply w-full shadow-lg p-2 relative;
}
</style>
