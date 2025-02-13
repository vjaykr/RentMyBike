import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MapView from '../components/MapView';

const Tracking = () => {
  const { bookingId } = useParams();
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Polling for tracking data (simulate real-time tracking)
    const interval = setInterval(async () => {
      try {
        const response = await axios.get(`/api/trackings/${bookingId}`);
        setTrackingData(response.data);
      } catch (err) {
        setError('Failed to fetch tracking data');
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bookingId]);

  if (error) return <div className="p-10 text-red-500">{error}</div>;
  if (!trackingData) return <div className="p-10">Fetching tracking data...</div>;

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Bike Tracking</h2>
      <MapView trackingData={trackingData} />
      <div className="mt-4">
        <p>Current Location: {trackingData.location}</p>
        <p>Status: {trackingData.status}</p>
      </div>
    </div>
  );
};

export default Tracking;
