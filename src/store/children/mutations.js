export const SET_CHILDREN = 'SET_CHILDREN';
export const ADD_CHILD = 'ADD_CHILD';

export const setChildren = (state, children) => {
  state.children = children;
};

export const addChild = ({ children }, child) => children.push(child);

export const mutationTypes = {
  SET_CHILDREN,
  ADD_CHILD,
};

export const mutations = {
  [SET_CHILDREN]: setChildren,
  [ADD_CHILD]: addChild,
};

export default mutations;
