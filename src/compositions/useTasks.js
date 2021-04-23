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

  const getTasks = async () => {
    if (tasks.value.length) return;
    await store.dispatch(types.GET_TASKS);
  };

  const getDifficulties = async () => {
    if (difficulties.value.length) return;
    await store.dispatch(types.GET_TASK_DIFFICULTIES);
  };

  const getRooms = async () => {
    if (rooms.value.length) return;
    await store.dispatch(types.GET_TASK_ROOMS);
  };

  const getAssignedTasks = async () => {
    if (assignedTasks.value.length) return;
    await store.dispatch(types.GET_ASSIGNED_TASKS);
  };

  const selectTask = (id) => store.commit(types.SELECT_TASK, id);

  const deleteTask = async (id) => await store.dispatch(types.DELETE_TASK, id);

  const updateTask = async (taskToUpdate) => await store.dispatch(types.UPDATE_TASK, taskToUpdate);

  const createTask = async (taskToCreate) => await store.dispatch(types.CREATE_TASK, taskToCreate);

  const assignTask = async (taskToAssign) => await store.dispatch(types.ASSIGN_TASK, taskToAssign);

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

    assignTask,
    selectTask,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
