<template>
  <DataTable :value="tasks">
    <Column field="name" header="Name"></Column>
    <Column field="note" header="Note"></Column>
    <Column field="points" header="Points"></Column>
    <Column field="room" header="Room"></Column>
  </DataTable>
  <!--
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
  -->
</template>

<script>
import { onMounted, defineComponent } from 'vue';

import useTasks from '@/compositions/useTasks';

export default defineComponent({
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
