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
  @apply bg-gray-700 text-green-300;
}

.list-item {
  @apply relative block;
  @apply py-2 px-4;
  @apply border border-gray-200;
}
</style>
