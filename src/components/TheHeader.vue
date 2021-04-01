<template>
  <header class="bg-darker text-white flex items-center justify-between">
    <a class="header-title" @click="$emit('navigate', '')"
      >Child<span class="text-primary">watch</span></a
    >

    <nav class="header-nav">
      <ul class="mx space-x-5">
        <li class="header-nav-item">
          <a @click="$emit('navigate', 'tasks')">Tasks</a>
        </li>
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
a:hover {
  @apply bg-dark cursor-pointer;
}
</style>
