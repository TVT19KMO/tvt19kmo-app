<template>
  <Button @click="checkout" :label="label" />
</template>

<script>
import { useStripe } from 'vue-use-stripe';
import { createCheckoutSession } from '@/api';
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'StripeCheckoutButton',

  props: {
    itemToPurchase: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Checkout',
    },
  },

  setup({ itemToPurchase }) {
    const route = useRoute();

    const { stripe } = useStripe({
      key:
        'pk_test_51Iebt0EEKvNzBMMmXI1hAPxVMzI04NnqMQ0hge5i7T0VSVGHcXOzHptqmZNa30HOmzXO30INkqxNe41rYOxTkH1K00yK0UM3Mr',
    });

    const checkout = async () => {
      console.log(window.location);
      try {
        console.log(itemToPurchase);
        const {
          data: { id },
        } = await createCheckoutSession(itemToPurchase, {
          route: window.location.href + route.path,
        });
        console.log(window.location);
        const data = await stripe.value.redirectToCheckout({ sessionId: id });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    return {
      checkout,
    };
  },
});
</script>

<style></style>
