<template>
  <header class="bg-gray-900 text-white flex items-center justify-between">
    <h1 class="header-title">Child<span class="text-green-300">watch</span></h1>

    <nav class="header-nav">
      <ul class="mx space-x-5">
        <li><a @click="$emit('navigate', 'tasks')">Tasks</a></li>
        <li><a @click="$emit('navigate', 'rewards')">Rewards</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  emits: ['navigate'],
};
</script>

<style scoped lang="postcss">
.header-title {
  @apply p-5 font-semibold text-xl;
}

.header-nav {
  @apply py-1;
}

li {
  @apply inline-block;
}

a {
  @apply inline-block p-4;
}
</style>
