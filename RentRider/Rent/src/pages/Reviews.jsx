import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import Rating from '../components/Rating';

const Reviews = () => {
  const { bikeId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/bikes/${bikeId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        setError('Failed to load reviews.');
      }
    };
    fetchReviews();
  }, [bikeId]);

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Reviews</h2>
      {error && <div className="text-red-500">{error}</div>}
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 my-2">
            <Rating rating={review.rating} />
            <p>{review.comment}</p>
            <small>By: {review.user}</small>
          </div>
        ))}
      </div>
      <ReviewForm bikeId={bikeId} />
    </div>
  );
};

export default Reviews;
