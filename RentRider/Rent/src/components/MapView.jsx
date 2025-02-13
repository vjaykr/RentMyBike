import React from 'react';

const MapView = ({ trackingData }) => {
  // In production, integrate with Google Maps or Mapbox
  return (
    <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
      {trackingData ? (
        <p>Bike at: {trackingData.location}</p>
      ) : (
        <p>Map placeholder: Display bike locations here</p>
      )}
    </div>
  );
};

export default MapView;
