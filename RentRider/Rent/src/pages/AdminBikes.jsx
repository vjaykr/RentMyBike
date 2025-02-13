import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get('/api/admin/bikes');
        setBikes(response.data);
      } catch (err) {
        setError('Failed to fetch bikes.');
      }
    };
    fetchBikes();
  }, []);

  const handleVerify = async (bikeId) => {
    try {
      await axios.put(`/api/admin/bikes/verify/${bikeId}`);
      setBikes(bikes.map(bike => bike.id === bikeId ? { ...bike, verified: true } : bike));
    } catch (err) {
      alert('Verification failed');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Bike Management</h2>
      {error && <div className="text-red-500">{error}</div>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Bike Name</th>
            <th className="py-2 px-4 border">Owner</th>
            <th className="py-2 px-4 border">Verified</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map(bike => (
            <tr key={bike.id}>
              <td className="py-2 px-4 border">{bike.name}</td>
              <td className="py-2 px-4 border">{bike.owner}</td>
              <td className="py-2 px-4 border">{bike.verified ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border">
                {!bike.verified && <button onClick={() => handleVerify(bike.id)} className="bg-green-600 text-white p-1 rounded">Verify</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBikes;
