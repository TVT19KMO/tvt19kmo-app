<template>
  <BaseForm @submit.prevent="updateTask">
    <template #header>
      <Heading type="h3" class="text-lg"> Create Task </Heading>
    </template>

    <BaseInput type="text" name="task-name" v-model="task.name">
      <template #label> Name: </template>
    </BaseInput>

    <BaseInput class="w-full" :textarea="true" name="task-note" v-model="task.note">
      <template #label> Note: </template>
    </BaseInput>

    <BaseInput type="range" name="task-points" v-model="task.points">
      <template #label> Points: </template>
    </BaseInput>

    <BaseInput type="checkbox" name="task-repeating" :modelValue="true">
      <template #label> Repeating: </template>
    </BaseInput>

    <template #submit> Create </template>
  </BaseForm>
</template>

<script>
import { defineComponent, computed } from 'vue';

import useTasks from '@/compositions/useTasks';

export default defineComponent({
  setup() {
    const { task, updateTask, createTask } = useTasks();

    return {
      task: computed(() => task.value || {}),
      updateTask,
    };
  },
});
</script>

<style scoped lang="postcss"></style>
