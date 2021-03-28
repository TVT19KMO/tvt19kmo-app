<template>
  <div class="min-h-screen">
    <TheHeader />
    <main class="container mx-auto">
      <h2 class="mt-5 ml-5 text-white text-xl font-bold">Tasks</h2>
      <div class="my-10 flex items-start space-x-5">
        <TaskList class="w-full" />
        <CreateTask class="hidden lg:inline-block w-96" />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import CreateTask from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    CreateTask,
    TaskList,
  },
};
</script>

<style>
body {
  @apply bg-gray-800;
}
</style>
