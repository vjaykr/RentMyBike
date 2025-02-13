import React from 'react';

const Rating = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5).fill(0).map((_, index) => (
        <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
