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
        <Button label="Assign" icon="pi" class="p-button-success" @click="$emit('assign')" />
      </template>
    </Toolbar>

    <DataTable :value="tasks" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column class="hidden md:table-cell" field="note" header="Note"></Column>
      <Column field="difficulty" header="Difficulty"></Column>
      <Column field="room" header="Room"></Column>
      <Column :exportable="false">
        <template #body="{ data: task }">
          <div class="space-y-1" v-if="task.creator">
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
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  emits: ['edit', 'create', 'delete', 'assign'],
});
</script>

<style></style>
