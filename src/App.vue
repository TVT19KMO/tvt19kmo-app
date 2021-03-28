<template>
  <div class="container mx-auto">
    <TaskList />
    <CreateTask />
  </div>
</template>

<script>
import CreateTask from '@/views/CreateTask.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  components: { CreateTask, TaskList },
};
</script>
