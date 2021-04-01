<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.button {
  @apply inline-block px-3 py-2 rounded-sm;
  @apply bg-primary text-white font-semibold;
  @apply text-center align-middle;
}
</style>
