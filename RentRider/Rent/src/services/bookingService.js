import api from './api';

export const createBooking = (bookingData) => {
  return api.post('/bookings', bookingData);
};

export const getBooking = (id) => {
  return api.get(`/bookings/${id}`);
};
