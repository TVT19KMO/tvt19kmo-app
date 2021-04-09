<template>
  <BaseTable>
    <template #head>
      <th scope="col">Name</th>
      <th scope="col">Note</th>
      <th scope="col">Points</th>
      <th scope="col">Room</th>
    </template>
    <template #default>
      <TaskListRow
        v-for="task in tasks"
        v-bind="task"
        :key="task.id"
        @delete="deleteTask"
        @edit="selectTask"
      />
    </template>
  </BaseTable>
</template>

<script>
import { onMounted, defineComponent } from 'vue';

import useTasks from '@/compositions/useTasks';
import TaskListRow from './TaskListRow.vue';

export default defineComponent({
  components: { TaskListRow },

  setup() {
    const { tasks, getTasks, deleteTask, selectTask } = useTasks();

    onMounted(async () => {
      await getTasks();
    });

    return { tasks, deleteTask, selectTask };
  },
});
</script>

<style></style>
