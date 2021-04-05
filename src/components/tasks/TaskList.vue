<template>
  <BaseTable>
    <template #head>
      <th scope="col">Name</th>
      <th scope="col">Note</th>
      <th scope="col">Points</th>
      <th scope="col">Room</th>
    </template>
    <template #default>
      <TaskListRow v-for="task in tasks" v-bind="task" :key="task.name" @delete="deleteTask" />
    </template>
  </BaseTable>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import { types } from '@/store/tasks';

import TaskListRow from './TaskListRow.vue';

export default {
  components: { TaskListRow },

  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.dispatch(types.GET_TASKS);
    });

    return {
      tasks: computed(() => store.state.tasks.tasks),
      deleteTask: async (id) => await store.dispatch(types.DELETE_TASK, id),
    };
  },
};
</script>

<style></style>
