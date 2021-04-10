import { createStore } from 'vuex';

import { store as tasks, types as taskTypes } from './tasks';
import { store as products, types as productTypes } from './products';

export const store = createStore({
  modules: {
    tasks,
    products,
  },
});

export const types = {
  ...taskTypes,
  ...productTypes,
};

export default store;
