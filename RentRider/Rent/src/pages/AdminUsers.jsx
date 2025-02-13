import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users.');
      }
    };
    fetchUsers();
  }, []);

  const handleVerify = async (userId) => {
    try {
      await axios.put(`/api/admin/users/verify/${userId}`);
      setUsers(users.map(user => user.id === userId ? { ...user, verified: true } : user));
    } catch (err) {
      alert('Verification failed');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">User Management</h2>
      {error && <div className="text-red-500">{error}</div>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Verified</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border">{user.fullName}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">{user.verified ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border">
                {!user.verified && <button onClick={() => handleVerify(user.id)} className="bg-green-600 text-white p-1 rounded">Verify</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
