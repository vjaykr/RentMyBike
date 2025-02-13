import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';

const BikeDetail = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const response = await axios.get(`/api/bikes/${id}`);
        setBike(response.data);
      } catch (err) {
        setError('Bike not found');
      }
    };
    fetchBike();
  }, [id]);

  if (error) return <div className="p-10 text-red-600">{error}</div>;
  if (!bike) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">{bike.name}</h2>
      <p>Type: {bike.type}</p>
      <p>Price: ${bike.price}/hr</p>
      <p>Location: {bike.location}</p>
      <p>Description: {bike.description}</p>
      <div className="mt-4">
        <Link to={`/booking/${bike.id}`} className="bg-blue-600 text-white p-2 rounded">Book This Bike</Link>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Reviews</h3>
        <ReviewForm bikeId={bike.id} />
      </div>
    </div>
  );
};

export default BikeDetail;
