<template>
  <div class="list">
    <header v-if="$slots.header" class="list-header">
      <slot name="header"></slot>
    </header>
    <ul>
      <li v-for="(item, index) in items" :key="index" class="list-item" :class="{ hoverable }">
        <slot name="default" :item="item">{{ index }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseList',
  props: {
    // Is hover effect enabled.
    hoverable: {
      type: Boolean,
      default: false,
    },

    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="postcss" scoped></style>
