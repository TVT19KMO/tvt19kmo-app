import { useStore } from 'vuex';
import { computed } from 'vue';

import { types } from '@/store/tasks';

export const useTasks = () => {
  const store = useStore();

  const tasks = computed(() => store.state.tasks.tasks);

  const task = computed(() => store.state.tasks.selectedTask);

  const assignedTasks = computed(() => store.state.tasks.assignedTasks);

  const difficulties = computed(() => store.state.tasks.taskDifficulties);

  const rooms = computed(() => store.state.tasks.taskRooms);

  const getTasks = async () => await store.dispatch(types.GET_TASKS);

  const getDifficulties = async () => {
    // Make sure difficulties are only fetched ones.
    if (difficulties.value.length > 0) return;
    await store.dispatch(types.GET_TASK_DIFFICULTIES);
  };

  const getRooms = async () => {
    // Make sure rooms are only fetched ones.
    if (rooms.value.length > 0) return;
    await store.dispatch(types.GET_TASK_ROOMS);
  };

  const getAssignedTasks = async () => {
    if (assignedTasks.value.length > 0) return;
    await store.dispatch(types.GET_ASSIGNED_TASKS);
  };

  const selectTask = (id) => store.commit(types.SELECT_TASK, id);

  const deleteTask = async (id) => await store.dispatch(types.DELETE_TASK, id);

  const updateTask = async (taskToUpdate) => await store.dispatch(types.UPDATE_TASK, taskToUpdate);

  const createTask = async (taskToCreate) => await store.dispatch(types.CREATE_TASK, taskToCreate);

  return {
    tasks,
    task,
    assignedTasks,
    rooms,
    difficulties,
    getDifficulties,
    getAssignedTasks,
    getRooms,
    getTasks,
    selectTask,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
