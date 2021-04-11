<template>
  <BaseModal class="w-96">
    <template #header> Select the amount of purchase </template>

    <BaseList #default="{ item: product }" :items="products">
      <div class="flex justify-between items-center">
        <img class="w-20 h-20" :src="images[`coin${product.amount}`]" />
        <p>{{ product.amount }} coins</p>
        <StripeCheckoutButton :label="`${product.price}€`" :itemToPurchase="product.id" />
      </div>
    </BaseList>
  </BaseModal>
</template>

<script>
/**
 * Modal for displaying purchasable products.
 * @author JIkaheimo (Jaakko Ikäheimo)
 */

import StripeCheckoutButton from '@/components/StripeCheckoutButton.vue';

import coin5000 from '@/assets/coin_5000.png';
import coin10000 from '@/assets/coin_10000.png';
import coin20000 from '@/assets/coin_20000.png';

import { products as useProducts } from '@/compositions';
import { onMounted } from 'vue-demi';

export default {
  components: { StripeCheckoutButton },

  setup() {
    const { products, getProducts } = useProducts();

    onMounted(async () => {
      await getProducts();
    });

    return { products, images: { coin5000, coin10000, coin20000 } };
  },
};
</script>

<style></style>
