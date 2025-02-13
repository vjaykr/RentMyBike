// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Registration endpoint
router.post('/register', async (req, res) => {
  console.log('Registration Request Body:', req.body); // Log incoming data
  const { fullName, email, password, role, phone } = req.body;
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      console.error(`Registration failed: User with email ${email} already exists.`);
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user instance
    user = new User({ fullName, email, password, role, phone });
    await user.save();
    console.log('User saved successfully:', user);

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ user, token });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
