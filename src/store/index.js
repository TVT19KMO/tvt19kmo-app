import { createStore } from 'vuex';

import { store as tasks, types as taskTypes } from './tasks';
import { store as products, types as productTypes } from './products';
import { store as user, types as userTypes } from './user';

export const store = createStore({
  modules: {
    tasks,
    products,
    user,
  },
});

export const types = {
  ...taskTypes,
  ...productTypes,
  ...userTypes,
};

export default store;
