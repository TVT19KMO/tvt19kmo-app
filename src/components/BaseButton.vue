<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.button {
  @apply inline-block px-3 py-2 rounded-sm;
  @apply bg-indigo-700 text-white;
  @apply text-center align-middle;
}
</style>
