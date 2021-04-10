<template>
  <component :is="type" :class="type">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    type: {
      type: String,
      default: 'h1',
    },
  },
};
</script>

<style lang="postcss" scoped>
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  @apply text-white mb-2 font-medium;
}
.h2 {
  @apply font-semibold text-xl;
}
</style>
