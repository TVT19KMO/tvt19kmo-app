<template>
  <Card @submit.prevent="updateTask">
    <template #title> Create Task </template>

    <template #content>
      <div class="p-fluid space-y-10">
        <span class="p-field p-float-label">
          <InputText id="task-name" type="text" v-model="task.name" />
          <label for="task-name">Name</label>
        </span>

        <span class="p-field p-float-label">
          <Textarea id="task-note" type="text" v-model="task.note" />
          <label for="task-note">Note</label>
        </span>

        <Dropdown
          v-model="task.difficulty"
          optionLabel="name"
          :options="difficulties"
          placeholder="Select a difficulty"
        />
      </div>
    </template>

    <template #footer>
      <Button icon="pi pi-check" type="button" label="Create" />
    </template>
  </Card>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';

import useTasks from '@/compositions/useTasks';

export default defineComponent({
  name: 'TaskForm',

  setup() {
    const { task, updateTask, createTask, taskDifficulties, getTaskDifficulties } = useTasks();

    onMounted(async () => {
      await getTaskDifficulties();
    });

    return {
      task: computed(() => task.value || {}),
      difficulties: taskDifficulties,
      updateTask,
    };
  },
});
</script>

<style scoped lang="postcss"></style>
