<template>
  <div class="w-full md:container mx-3 md:mx-auto">
    <h2 class="text-xl my-5 text-white">Manage your tasks</h2>
    <div>
      <TaskList
        @create="createTask"
        @edit="editTask"
        @assign="showTaskAssign = true"
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

      <TaskAssignModal
        v-if="showTaskAssign"
        @close="showTaskAssign = false"
        @save="assignTask"
        v-model:visible="showTaskAssign"
        :tasks="tasks"
      />
    </div>
  </div>
</template>

<script>
import { TaskList, TaskEditModal, TaskAssignModal } from '@/components/tasks';

import { ASSIGN_TASK, DELETE_TASK, SAVE_TASK } from '@/store/tasks/actions';
import { CLEAR_TASK, SELECT_TASK } from '@/store/tasks/mutations';
import { SET_BALANCE } from '@/store/user/mutations';

import { onMounted, defineComponent, computed } from 'vue';

import useTasks from '@/compositions/useTasks';

import { findById } from '@/utils';
import { mapActions, mapMutations } from 'vuex';

export default defineComponent({
  components: {
    TaskList,
    TaskEditModal,
    TaskAssignModal,
  },

  data: () => ({
    showTaskEdit: false,
    showTaskAssign: false,
  }),

  methods: {
    ...mapMutations([SELECT_TASK, CLEAR_TASK, SET_BALANCE]),
    ...mapActions([DELETE_TASK, SAVE_TASK, ASSIGN_TASK]),

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

    async assignTask(assignment) {
      const { balance } = await this[ASSIGN_TASK](assignment);
      this[SET_BALANCE](balance);
      this.showTaskAssign = false;
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
      selectTask,
      rooms,
      difficulties,
    } = useTasks();

    // Fetch all required data.
    onMounted(async () => {
      await Promise.all([getDifficulties(), getRooms()]);
      await getTasks();
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
      selectTask,
      rooms,
      difficulties,
    };
  },
});
</script>

<style></style>
