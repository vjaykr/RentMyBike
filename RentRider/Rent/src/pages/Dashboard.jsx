import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-4">Welcome to the admin dashboard. Here you can manage users, transactions, disputes, and more.</p>
      
      {/* Example of Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-3xl mt-2">1,234</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold">Total Bikes Listed</h3>
          <p className="text-3xl mt-2">567</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold">Total Transactions</h3>
          <p className="text-3xl mt-2">890</p>
        </div>
      </div>
      
      {/* Future Implementation: Graphs and Detailed Reports */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Recent Activity</h3>
        <p className="mt-2">[Insert recent activity table or graph here]</p>
      </div>
    </div>
  );
};

export default Dashboard;
