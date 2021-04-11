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
