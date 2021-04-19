import { api } from './setup';

export const getProducts = async () => await api.get('products');
