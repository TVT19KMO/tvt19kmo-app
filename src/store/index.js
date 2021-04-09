import { createStore } from 'vuex';

import { store as tasks, types as taskTypes } from './tasks';

export const store = createStore({
  modules: {
    tasks,
  },
});

export const types = {
  ...taskTypes,
};

export default store;
