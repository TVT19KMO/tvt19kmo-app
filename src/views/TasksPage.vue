<template>
  <Heading type="h2">Tasks</Heading>
  <div class="my-10 flex items-start space-x-5">
    <TaskList class="w-full lg:w-2/3" />
    <CreateTask class="hidden lg:inline-block lg:w-1/3" />
  </div>
</template>

<script>
import CreateTask from '@/components/tasks/TaskForm.vue';
import TaskList from '@/components/tasks/TaskList.vue';

export default {
  components: {
    CreateTask,
    TaskList,
  },
};
</script>

<style></style>
