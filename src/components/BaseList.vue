<template>
  <div class="list">
    <header v-if="$slots.header" class="list-header">
      <slot name="header"></slot>
    </header>
    <ul>
      <li v-for="index in 3" :key="index" class="list-item" :class="{ hoverable }">
        <slot>asd</slot>
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
  },
};
</script>

<style lang="postcss">
.list {
  @apply flex flex-col rounded-md;
  @apply bg-dark;
  @apply shadow-xl;
}

.list-header > * {
  @apply font-semibold;
}

.list-item {
  @apply text-green-300;
}

.list-item.hoverable:hover {
  @apply bg-darker;
}

.list-item,
.list-header {
  @apply relative block;
  @apply py-2 px-4;
  @apply border border-gray-500;
}

.list-header {
  border-bottom-width: 0;
}

.list-item + .list-item {
  border-top-width: 0;
}

.list-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.list-item:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
</style>
