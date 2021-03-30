<template>
  <div>
    <slot name="header"></slot>
    <ul class="list">
      <li v-for="index in 3" :key="index" class="list-item">
        <slot>asd</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseList',
};
</script>

<style lang="postcss">
.list {
  @apply flex flex-col rounded-md;
  @apply bg-dark text-green-300;
  @apply shadow-xl;
}

.list-item {
  @apply relative block;
  @apply py-2 px-4;
  @apply border border-gray-500;
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
