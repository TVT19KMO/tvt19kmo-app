import { createStore } from 'vuex';

import { updateField, getField } from 'vuex-map-fields';

import { store as tasks, types as taskTypes } from './tasks';
import { store as products, types as productTypes } from './products';
import { store as user, types as userTypes } from './user';
import { store as children } from './children';

export const store = createStore({
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  modules: {
    tasks,
    products,
    user,
    children,
  },
});

export const types = {
  ...taskTypes,
  ...productTypes,
  ...userTypes,
};

export default { store, ...types };
