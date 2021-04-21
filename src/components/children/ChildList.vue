<template>
  <div>
    <Toolbar class="p-mb-4">
      <template #left>
        <Button
          label="New"
          icon="pi pi-plus"
          class="p-button-success p-mr-2"
          @click="$emit('create')"
        />
      </template>
    </Toolbar>

    <DataTable :value="tasks" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="note" header="Note"></Column>
      <Column field="difficulty" header="Difficulty"></Column>
      <Column field="room" header="Room"></Column>
      <Column :exportable="false">
        <template #body="{ data: task }">
          <Button
            icon="pi pi-pencil"
            class="p-button-rounded p-button-success p-mr-2"
            @click="$emit('edit', task.id)"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-warning"
            @click="$emit('delete', task.id)"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import useTasks from '@/compositions/useTasks';
import { defineComponent } from 'vue-demi';

export default defineComponent({
  emits: ['edit', 'create', 'delete'],

  setup() {
    const { tasks } = useTasks();
    return {
      tasks,
    };
  },
});
</script>

<style></style>
