import api from './api';

export const getBikes = (filters) => {
  return api.get('/bikes', { params: filters });
};

export const getBike = (id) => {
  return api.get(`/bikes/${id}`);
};

export const createBike = (bikeData) => {
  return api.post('/bikes', bikeData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
