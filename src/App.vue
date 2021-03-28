<template>
  <TheHeader />
  <div class="mx-auto flex">
    <h2>Tasks</h2>
    <TaskList class="w-2/3 max-w-6xl" />
    <CreateTask class="" />
  </div>
  <TheFooter />
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
