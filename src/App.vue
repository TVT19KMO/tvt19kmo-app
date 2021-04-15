<template>
  <div>
    <TheHeader @navigate="route = $event" />
    <main class="min-w-screen min-h-screen">
      <!-- TODO: User router -->
      <router-view></router-view>
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
  background-color: #17212f;
}
</style>
