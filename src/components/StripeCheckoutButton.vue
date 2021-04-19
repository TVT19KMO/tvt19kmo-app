<template>
  <Button @click="checkout" :label="label" />
</template>

<script>
import { useStripe } from 'vue-use-stripe';
import { createCheckoutSession } from '@/api';
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
    const { stripe } = useStripe({
      key:
        'pk_test_51Iebt0EEKvNzBMMmXI1hAPxVMzI04NnqMQ0hge5i7T0VSVGHcXOzHptqmZNa30HOmzXO30INkqxNe41rYOxTkH1K00yK0UM3Mr',
    });

    const checkout = async () => {
      try {
        const {
          data: { id },
        } = await createCheckoutSession(itemToPurchase, {
          route: window.location.href,
        });
        const data = await stripe.value.redirectToCheckout({ sessionId: id });
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
