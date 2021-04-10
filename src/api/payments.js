import { api } from './setup';

export const createPaymentIntent = async ({ product }) =>
  await api.post('payments/create-payment-intent', { items: [{ id: product }] });

export default {
  createPaymentIntent,
};
