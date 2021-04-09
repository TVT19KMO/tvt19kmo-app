import { useStore } from 'vuex';
import { computed } from 'vue';

import { types } from '@/store/tasks';

export const useTasks = () => {
  const store = useStore();

  const tasks = computed(() => store.state.tasks.tasks);

  const task = computed(() => store.state.tasks.selectedTask);

  const getTasks = async () => await store.dispatch(types.GET_TASKS);

  const selectTask = (id)
    => store.commit(types.SELECT_TASK, id);

  const deleteTask = async (id)
    => await store.dispatch(types.DELETE_TASK, id);

  const updateTask = async (taskToUpdate)
    => await store.dispatch(types.UPDATE_TASK, taskToUpdate);

  const createTask = async (taskToCreate)
    => await store.dispatch(types.CREATE_TASK, taskToCreate);

  return {
    tasks,
    task,
    getTasks,
    selectTask,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
