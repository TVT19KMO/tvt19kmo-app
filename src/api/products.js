import { api } from './setup';

export const getProducts = async () => api.get('products');
