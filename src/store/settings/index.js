import state from "./state";
import { mutations, mutationTypes } from './mutations';
import { actions, actionTypes } from "./actions";
import { getters } from "./getters";

export const types = {
    ...actionTypes,
    ...mutationTypes,
};

export const store = {
    state,
    getters,
    mutations,
    actions,
};
  
export default store;