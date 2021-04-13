<template>
  <DataTable :value="tasks">
    <Column field="name" header="Name"></Column>
    <Column field="note" header="Note"></Column>
    <Column field="difficulty" header="Difficulty"></Column>
    <Column field="room" header="Room"></Column>
    <Column :exportable="false">
      <template #body>
        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" />
        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" />
      </template>
    </Column>
  </DataTable>
</template>

<script>
import { onMounted, defineComponent, computed } from 'vue';

import useTasks from '@/compositions/useTasks';

import { findById } from '@/utils';

export default defineComponent({
  setup() {
    const {
      tasks,
      getTasks,
      getRooms,
      getDifficulties,
      deleteTask,
      selectTask,
      rooms,
      difficulties,
    } = useTasks();

    onMounted(async () => {
      await Promise.all([getTasks(), getDifficulties(), getRooms()]);
    });

    return {
      tasks: computed(() => {
        return tasks.value.map(({ room, difficulty, ...other }) => ({
          ...other,
          room: findById(rooms.value, room.id).name,
          difficulty: findById(difficulties.value, difficulty.id).name,
        }));
      }),

      deleteTask,
      selectTask,
    };
  },
});
</script>

<style></style>
