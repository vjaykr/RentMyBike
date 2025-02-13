import api from './api';

export const processPayment = (paymentData) => {
  return api.post('/payments', paymentData);
};
