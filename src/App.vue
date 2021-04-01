<template>
  <div class="min-h-screen">
    <TheHeader @navigate="route = $event" />
    <main class="container mx-auto my-5">
      <!-- TODO: User router -->
      <MainPage v-if="route === ''" />
      <TasksPage v-else-if="route === 'tasks'" />

    </main>
    <TheFooter class="fixed bottom-0" />
  </div>
</template>

<script>
import TasksPage from '@/views/TasksPage.vue';
import MainPage from '@/views/MainPage.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    TasksPage,
    MainPage,
  },
  data() {
    return {
      route: '',
    };
  },
};
</script>

<style lang="postcss">
body {
  @apply bg-gray-800;
  @apply font-sans text-base font-normal;
}
</style>
