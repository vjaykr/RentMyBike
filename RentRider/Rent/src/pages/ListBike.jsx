import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListBike = () => {
  const [bikeData, setBikeData] = useState({
    name: '',
    type: '',
    price: '',
    location: '',
    description: '',
    images: [],
    availability: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBikeData({ ...bikeData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setBikeData({ ...bikeData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use FormData for image uploads
    const formData = new FormData();
    for (const key in bikeData) {
      if (key === 'images') {
        for (let i = 0; i < bikeData.images.length; i++) {
          formData.append('images', bikeData.images[i]);
        }
      } else {
        formData.append(key, bikeData[key]);
      }
    }
    try {
      await axios.post('/api/bikes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('Bike listed successfully.');
      navigate('/bikes');
    } catch (err) {
      setMessage('Failed to list bike.');
    }
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-2xl mb-4">List Your Bike</h2>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input name="name" value={bikeData.name} onChange={handleChange} placeholder="Bike Name" className="border p-2 my-2" required />
        <input name="type" value={bikeData.type} onChange={handleChange} placeholder="Bike Type" className="border p-2 my-2" required />
        <input name="price" value={bikeData.price} onChange={handleChange} placeholder="Price per Hour" className="border p-2 my-2" required />
        <input name="location" value={bikeData.location} onChange={handleChange} placeholder="Location" className="border p-2 my-2" required />
        <textarea name="description" value={bikeData.description} onChange={handleChange} placeholder="Description" className="border p-2 my-2" required></textarea>
        <input type="file" multiple onChange={handleFileChange} className="my-2" />
        <input name="availability" value={bikeData.availability} onChange={handleChange} placeholder="Availability (e.g., 9AM-5PM)" className="border p-2 my-2" required />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">List Bike</button>
      </form>
    </div>
  );
};

export default ListBike;
