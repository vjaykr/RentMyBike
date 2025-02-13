import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Pages for core modules and additional functionalities
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import BikeList from './pages/BikeList';
import BikeDetail from './pages/BikeDetail';
import ListBike from './pages/ListBike';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Tracking from './pages/Tracking';
import Reviews from './pages/Reviews';
import AdminUsers from './pages/AdminUsers';
import AdminBikes from './pages/AdminBikes';
import AdminTransactions from './pages/AdminTransactions';
import Support from './pages/Support';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bikes" element={<BikeList />} />
          <Route path="/bikes/:id" element={<BikeDetail />} />
          <Route path="/list-bike" element={<ListBike />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/payment/:bookingId" element={<Payment />} />
          <Route path="/tracking/:bookingId" element={<Tracking />} />
          <Route path="/reviews/:bikeId" element={<Reviews />} />
          {/* Admin routes */}
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/bikes" element={<AdminBikes />} />
          <Route path="/admin/transactions" element={<AdminTransactions />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
