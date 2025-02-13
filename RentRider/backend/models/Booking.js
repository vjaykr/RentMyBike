// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  bike:      { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true },
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate:   { type: Date, required: true },
  message:   { type: String },
  status:    { type: String, enum: ['pending', 'approved', 'cancelled'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
