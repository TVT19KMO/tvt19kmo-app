import { useStore } from 'vuex';
import { computed } from 'vue';
import { GET_CHILDREN } from '@/store/children/actions';

export const useChildData = () => {
  const store = useStore();

  const children = computed(() => store.state.children.children);

  const getChildren = async () => {
    if (children.value.length) return;
    await store.dispatch(GET_CHILDREN);
  };

  return {
    children,
    getChildren,
  };
};

export default useChildData;
