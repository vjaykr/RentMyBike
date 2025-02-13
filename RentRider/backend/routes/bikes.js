// routes/bikes.js
const express = require('express');
const router = express.Router();
const Bike = require('../models/Bike');
const { protect } = require('../middleware/authMiddleware');

// Create a new bike listing (bike owner only)
router.post('/', protect, async (req, res) => {
  try {
    const bike = new Bike({ ...req.body, owner: req.user._id });
    await bike.save();
    res.status(201).json(bike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all bikes (with optional filtering)
router.get('/', async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single bike by ID
router.get('/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.status(404).json({ message: 'Bike not found' });
    res.status(200).json(bike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
