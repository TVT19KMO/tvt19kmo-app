<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.button {
  @apply inline-block text-white p-2 rounded-sm bg-indigo-700;
}
</style>
