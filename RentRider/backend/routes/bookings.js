// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { protect } = require('../middleware/authMiddleware');

// Create a new booking
router.post('/', protect, async (req, res) => {
  const { bikeId, startDate, endDate, message } = req.body;
  try {
    const booking = new Booking({
      bike: bikeId,
      user: req.user._id,
      startDate,
      endDate,
      message
    });
    await booking.save();
    res.status(201).json({ bookingId: booking._id, booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get booking details by ID (optional)
router.get('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('bike user');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
