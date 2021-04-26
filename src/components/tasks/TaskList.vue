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
      <Column>
        <template #body="{ data: task }">
          <TaskListItem
            @edit="$emit('edit', $event)"
            @delete="$emit('delete', $event)"
            :task="task"
            class="space-y-1"
            v-if="task.creator"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi';

import TaskListItem from './TaskListItem.vue';

export default defineComponent({
  components: { TaskListItem },

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
