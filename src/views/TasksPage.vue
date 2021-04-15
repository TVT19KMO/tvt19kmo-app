<template>
  <Heading type="h2">Tasks</Heading>
  <div class="my-10 flex items-start space-x-5">
    <TaskList
      @create="createTask"
      @edit="editTask"
      @delete="deleteTask"
      :tasks="tasks"
      class="w-full lg:w-2/3"
    />
    <TaskEditModal
      v-if="showTaskEdit"
      @close="showTaskEdit = false"
      @save="saveTask"
      v-model:visible="showTaskEdit"
      :difficulties="difficulties"
      :rooms="rooms"
    />
  </div>
</template>

<script>
import TaskList from '@/components/tasks/TaskList.vue';
import TaskEditModal from '@/components/tasks/TaskEditModal.vue';

import { DELETE_TASK, SAVE_TASK } from '@/store/tasks/actions';
import { CLEAR_TASK, SELECT_TASK } from '@/store/tasks/mutations';

import { onMounted, defineComponent, computed } from 'vue';

import useTasks from '@/compositions/useTasks';

import { findById } from '@/utils';
import { mapActions, mapMutations } from 'vuex';

export default defineComponent({
  components: {
    TaskList,
    TaskEditModal,
  },

  data() {
    return {
      showTaskEdit: false,
    };
  },

  methods: {
    ...mapMutations([SELECT_TASK, CLEAR_TASK]),
    ...mapActions([DELETE_TASK, SAVE_TASK]),

    createTask() {
      this[CLEAR_TASK]();
      this.showTaskEdit = true;
    },

    deleteTask(taskId) {
      this[DELETE_TASK](taskId);
    },

    editTask(taskId) {
      this[SELECT_TASK](taskId);
      this.showTaskEdit = true;
    },

    saveTask() {
      this[SAVE_TASK]();
      this.showTaskEdit = false;
    },
  },

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
      await Promise.all([getDifficulties(), getRooms(), await getTasks()]);
    });

    const filledTasks = computed(() => {
      return tasks.value.map(({ room, difficulty, ...other }) => ({
        ...other,
        room: findById(rooms.value, room.id).name,
        difficulty: findById(difficulties.value, difficulty.id).name,
      }));
    });

    return {
      tasks: filledTasks,
      deleteTask,
      selectTask,
      rooms,
      difficulties,
    };
  },
});
</script>

<style></style>
