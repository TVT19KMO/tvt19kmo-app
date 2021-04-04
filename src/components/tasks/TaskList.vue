<template>
  <BaseTable>
    <template #head>
      <th scope="col">Name</th>
      <th scope="col">Note</th>
      <th scope="col">Points</th>
      <th scope="col">Room</th>
    </template>

    <template #default>
      <TaskListRow v-for="task in tasks" v-bind="task" :key="task.name" />
    </template>
  </BaseTable>
</template>

<script>
import { getTasks } from '@/api';

import TaskListRow from './TaskListRow.vue';

export default {
  components: { TaskListRow },

  data() {
    return {
      tasks: [],
      isLoading: false,
    };
  },

  async mounted() {
    this.isLoading = true;
    try {
      const { data: tasks } = await getTasks();
      this.tasks = tasks;
    } catch (e) {
      // Add error handling.
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style></style>
