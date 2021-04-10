<template>
  <header class="bg-darker text-white flex items-center justify-between w-screen px-5">
    <a class="header-title" @click="$emit('navigate', '')"
      >Child<span class="text-primary">watch</span></a
    >

    <nav class="header-nav">
      <ul class="mx space-x-5">
        <li class="header-nav-item">
          <a @click="$emit('navigate', 'tasks')">Tasks</a>
          <FontAwesomeIcon @click="showModal = true" icon="wallet" />
        </li>
      </ul>
    </nav>
  </header>

  <PurchaseModal v-if="showModal" @close="showModal = false" />
</template>

<script>
import PurchaseModal from '@/components/PurchaseModal.vue';

export default {
  name: 'TheHeader',
  emits: ['navigate'],
  components: { PurchaseModal },

  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped lang="postcss">
.header-title {
  @apply font-semibold text-xl;
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
