import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({ fullName: '', email: '', phone: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // If user data exists in context, load it into form fields
    if (user) {
      setProfileData({ fullName: user.fullName, email: user.email, phone: user.phone || '' });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profileData);
      setMessage('Profile updated successfully.');
    } catch (err) {
      setMessage('Failed to update profile.');
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Your Profile</h2>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" name="fullName" value={profileData.fullName} onChange={handleChange} placeholder="Full Name" className="border p-2 my-2" required />
        <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" className="border p-2 my-2" required />
        <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} placeholder="Phone Number" className="border p-2 my-2" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
