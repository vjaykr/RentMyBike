import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/admin/transactions');
        setTransactions(response.data);
      } catch (err) {
        setError('Failed to fetch transactions.');
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Transaction Monitoring</h2>
      {error && <div className="text-red-500">{error}</div>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Booking ID</th>
            <th className="py-2 px-4 border">User</th>
            <th className="py-2 px-4 border">Amount</th>
            <th className="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td className="py-2 px-4 border">{tx.bookingId}</td>
              <td className="py-2 px-4 border">{tx.user}</td>
              <td className="py-2 px-4 border">${tx.amount}</td>
              <td className="py-2 px-4 border">{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTransactions;
