import { api } from './setup';

export const createCheckoutSession = async (id, { route }) =>
  await api.post('payments/create-checkout-session', {
    items: [{ price: id, quantity: 1 }],
    route,
  });

export default {
  createCheckoutSession,
};
