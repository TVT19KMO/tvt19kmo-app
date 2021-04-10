import { getProducts as getProducts_ } from '@/api/products';
import { mutationTypes } from './mutations';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = async ({ commit }) => {
  const { data: products } = await getProducts_();
  commit(mutationTypes.SET_PRODUCTS, products);
};

export const actionTypes = {
  GET_PRODUCTS,
};

export const actions = {
  [GET_PRODUCTS]: getProducts,
};

export default actions;
