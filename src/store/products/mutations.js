export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (state, products) => (state.products = products);

export const mutationTypes = {
  SET_PRODUCTS,
};

export const mutations = {
  [SET_PRODUCTS]: setProducts,
};

export default mutations;
