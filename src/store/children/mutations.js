import _ from 'lodash';

export const SET_CHILDREN = 'SET_CHILDREN';
export const ADD_CHILD = 'ADD_CHILD';
export const REMOVE_CHILD_DEVICE = 'REMOVE_CHILD_DEVICE';

export const setChildren = (state, children) => {
  state.children = children;
};

export const addChild = ({ children }, child) => children.push(child);

export const removeChildDevice = ({ children }, id) => {
  children[_.findIndex(children, { id })].device = null;
};

export const mutationTypes = {
  SET_CHILDREN,
  ADD_CHILD,
  REMOVE_CHILD_DEVICE,
};

export const mutations = {
  [SET_CHILDREN]: setChildren,
  [ADD_CHILD]: addChild,
  [REMOVE_CHILD_DEVICE]: removeChildDevice,
};

export default mutations;
