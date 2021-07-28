import { useStore } from 'vuex';
import { computed } from 'vue';
import { types } from '@/store';

export const useSettings = () => {
  const store = useStore();

  const password = computed(() => store.state.changePassword);

  const changePassword = async (user) => await store.dispatch(types.SET_PASSWORD, password);

  return {
    password: password,

    changePassword,
  };
};

export default useSettings;
