<template>
  <div>
    <TheHeader @navigate="route = $event" />
    <main class="container mx-auto">
      <!-- TODO: User router -->
      <MainPage v-if="route === ''" />
      <TasksPage v-else-if="route === 'tasks'" />
      <RewardsPage v-else-if="route === 'rewards'" />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TasksPage from '@/views/TasksPage.vue';
import MainPage from '@/views/MainPage.vue';
import RewardsPage from '@/views/RewardsPage.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    TasksPage,
    RewardsPage,
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
