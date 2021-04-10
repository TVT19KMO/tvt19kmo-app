import { useStore } from 'vuex';
import { computed } from 'vue';

import { types } from '@/store/products';
import { SET_PRODUCTS } from '@/store/products/mutations';

export const useProducts = () => {
  const store = useStore();

  const products = computed(() => store.state.products.products);

  const getProducts = async () => {
    if (products.value.length > 0) return;
    await store.dispatch(types.GET_PRODUCTS);
  };

  return {
    products,
    getProducts,
  };
};

export default useProducts;
