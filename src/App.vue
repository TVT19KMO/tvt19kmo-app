<template>
  <div>
    <TheHeader />
    <main class="container mx-auto">
      <TasksPage />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TasksPage from '@/views/TasksPage.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    TasksPage,
  },
};
</script>

<style>
body {
  @apply bg-gray-800;
}
</style>
