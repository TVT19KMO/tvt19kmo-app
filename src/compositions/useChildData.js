import { useStore } from 'vuex';
import { computed } from 'vue';

import { types } from '@/store/children';

export const useChildData = () => {
  const store = useStore();

  const children = computed(() => store.state.children.children);

  const task = computed(() => store.state.children.assignTask);

  const getChildren = async () => await store.dispatch(types.GET_TASKS);

  const assignTask = async () => await store.dispatch(types.ASSIGN_TASK);

  const deleteTask = async (id) => await store.dispatch(types.DELETE_TASK, id);

  return {
    children,
    task,
    getChildren,
    assignTask,
    deleteTask,
  };
};

export default useChildData;
