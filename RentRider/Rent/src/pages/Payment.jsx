import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      // Integrate with a payment gateway like Stripe or Razorpay here
      await axios.post('/api/payments', { bookingId, ...cardDetails });
      setMessage('Payment successful!');
      navigate(`/tracking/${bookingId}`);
    } catch (err) {
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Payment</h2>
      {error && <div className="text-red-500">{error}</div>}
      {message && <div className="text-green-500">{message}</div>}
      <form onSubmit={handlePayment} className="flex flex-col">
        <input type="text" name="cardNumber" placeholder="Card Number" value={cardDetails.cardNumber} onChange={handleChange} className="border p-2 my-2" required />
        <input type="text" name="expiry" placeholder="Expiry Date (MM/YY)" value={cardDetails.expiry} onChange={handleChange} className="border p-2 my-2" required />
        <input type="text" name="cvv" placeholder="CVV" value={cardDetails.cvv} onChange={handleChange} className="border p-2 my-2" required />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
