import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [filters, setFilters] = useState({ location: '', type: '', price: '' });

  useEffect(() => {
    fetchBikes();
  }, [filters]);

  const fetchBikes = async () => {
    // Construct query string from filters
    const query = new URLSearchParams(filters).toString();
    try {
      const response = await axios.get(`/api/bikes?${query}`);
      setBikes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({...filters, [e.target.name]: e.target.value});
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Available Bikes</h2>
      <div className="mb-4">
        <input name="location" value={filters.location} onChange={handleFilterChange} placeholder="Location" className="border p-2 mr-2" />
        <input name="type" value={filters.type} onChange={handleFilterChange} placeholder="Bike Type" className="border p-2 mr-2" />
        <input name="price" value={filters.price} onChange={handleFilterChange} placeholder="Max Price" className="border p-2" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {bikes.map((bike) => (
          <Link key={bike.id} to={`/bikes/${bike.id}`} className="border p-4 rounded hover:shadow-lg">
            <h3 className="text-lg font-semibold">{bike.name}</h3>
            <p>Type: {bike.type}</p>
            <p>Price: ${bike.price}/hr</p>
            <p>Location: {bike.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BikeList;
