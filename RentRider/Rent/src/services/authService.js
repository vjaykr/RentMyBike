import api from './api';

export const loginUser = (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const registerUser = (userData) => {
  return api.post('/auth/register', userData);
};

export const updateUserProfile = (profileData) => {
  return api.put('/auth/profile', profileData);
};
