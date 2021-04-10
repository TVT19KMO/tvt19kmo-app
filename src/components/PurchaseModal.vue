<template>
  <BaseModal class="w-96">
    <template #header>
      <Heading :type="'h2'">{{ titleText }}</Heading>
    </template>

    <BaseList v-if="!productToPurchase" #default="{ item: product }" :items="products">
      <div class="flex justify-between items-center">
        <img class="w-20 h-20" :src="images[`coin${product.amount}`]" />
        <p>{{ product.amount }} coins</p>
        <BaseButton @click="productToPurchase = product">{{ product.price }}€</BaseButton>
      </div>
    </BaseList>

    <StripePurchase :item="productToPurchase" v-else #default="{}" />
  </BaseModal>
</template>

<script>
/**
 * Modal for displaying purchasable products.
 * @author JIkaheimo (Jaakko Ikäheimo)
 */

import StripePurchase from '@/components/StripePurchase.vue';

import coin5000 from '@/assets/coin_5000.png';
import coin10000 from '@/assets/coin_10000.png';
import coin20000 from '@/assets/coin_20000.png';

import { products as useProducts } from '@/compositions';
import { onMounted } from 'vue-demi';

export default {
  components: { StripePurchase },

  data: () => ({ productToPurchase: null }),

  computed: {
    titleText: ({ productToPurchase }) =>
      productToPurchase
        ? 'Please enter your card info'
        : 'Please select the amount of coins to purchase',
  },

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
