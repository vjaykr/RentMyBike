import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ bikeId }) => {
  const [review, setReview] = useState({ rating: 0, comment: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/bikes/${bikeId}/reviews`, review);
      setMessage('Review submitted successfully.');
      setReview({ rating: 0, comment: '' });
    } catch (err) {
      setMessage('Failed to submit review.');
    }
  };

  return (
    <div className="mt-4">
      {message && <div className="mb-2">{message}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Rating:</label>
        <select name="rating" value={review.rating} onChange={handleChange} className="border p-2 my-2" required>
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
        </select>
        <textarea name="comment" value={review.comment} onChange={handleChange} placeholder="Write a review..." className="border p-2 my-2" required></textarea>
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
