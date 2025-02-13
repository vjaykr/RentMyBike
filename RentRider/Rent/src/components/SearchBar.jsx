import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/bikes?search=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center">
      <input 
        type="text" 
        placeholder="Search bikes by location, type..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-64"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 ml-2">Search</button>
    </form>
  );
};

export default SearchBar;
