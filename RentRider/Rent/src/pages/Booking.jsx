import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Booking = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({ startDate: '', endDate: '', message: '' });
  const [bike, setBike] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const response = await axios.get(`/api/bikes/${id}`);
        setBike(response.data);
      } catch (err) {
        setError('Unable to load bike details.');
      }
    };
    fetchBike();
  }, [id]);

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', {
        bikeId: id,
        userId: user.id,
        ...bookingData
      });
      // Redirect to payment page with booking id returned from backend
      navigate(`/payment/${response.data.bookingId}`);
    } catch (err) {
      setError('Booking failed.');
    }
  };

  if (error) return <div className="p-10 text-red-500">{error}</div>;
  if (!bike) return <div className="p-10">Loading bike details...</div>;

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-2xl mb-4">Book: {bike.name}</h2>
      <form onSubmit={handleBooking} className="flex flex-col">
        <label className="mt-2">Start Date & Time</label>
        <input type="datetime-local" name="startDate" value={bookingData.startDate} onChange={handleChange} className="border p-2 my-2" required />
        <label className="mt-2">End Date & Time</label>
        <input type="datetime-local" name="endDate" value={bookingData.endDate} onChange={handleChange} className="border p-2 my-2" required />
        <textarea name="message" value={bookingData.message} onChange={handleChange} placeholder="Any special instructions?" className="border p-2 my-2"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-2">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Booking;
