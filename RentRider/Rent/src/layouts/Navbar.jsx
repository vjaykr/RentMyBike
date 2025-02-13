import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div>
        <Link to="/" className="text-xl font-bold">Bike Rental</Link>
      </div>
      <div>
        <Link to="/bikes" className="mr-4">Bikes</Link>
        {user ? (
          <>
            <Link to="/profile" className="mr-4">Profile</Link>
            {user.role === 'owner' && <Link to="/list-bike" className="mr-4">List Your Bike</Link>}
            {user.role === 'admin' && (
              <>
                <Link to="/admin/users" className="mr-4">Users</Link>
                <Link to="/admin/bikes" className="mr-4">Bikes</Link>
                <Link to="/admin/transactions" className="mr-4">Transactions</Link>
              </>
            )}
            <button onClick={handleLogout} className="bg-red-500 p-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
