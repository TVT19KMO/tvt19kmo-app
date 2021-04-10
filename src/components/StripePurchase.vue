<template>
  <div class="space-y-5">
    <StripeElement :element="cardElement" @change="event = $event" />
    <BaseButton @click="purchase">Purchase</BaseButton>
  </div>
</template>

<script>
import { useStripe, StripeElement } from 'vue-use-stripe';
import { ref } from 'vue-demi';
import { createPaymentIntent } from '@/api';

export default {
  name: 'StripePurchase',

  components: { StripeElement },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup({ item }) {
    const event = ref(null);

    const {
      stripe,
      elements: [cardElement],
    } = useStripe({
      key:
        'pk_test_51Iebt0EEKvNzBMMmXI1hAPxVMzI04NnqMQ0hge5i7T0VSVGHcXOzHptqmZNa30HOmzXO30INkqxNe41rYOxTkH1K00yK0UM3Mr' ||
        '',
      elements: [{ type: 'card', options: {} }],
    });

    const purchase = async () => {
      if (event.value?.complete) {
        try {
          const {
            data: { clientSecret },
          } = await createPaymentIntent(item);
          const { data } = await stripe.value.confirmCardPayment(clientSecret, {
            payment_method: {
              card: cardElement.value,
            },
          });
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      }
    };

    return {
      event,
      cardElement,
      purchase,
    };
  },
};
</script>

<style lang="postcss" scoped></style>
