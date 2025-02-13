// models/Bike.js
const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
  owner:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:        { type: String, required: true },
  type:        { type: String, required: true },
  price:       { type: Number, required: true },
  location:    { type: String, required: true },
  description: { type: String },
  images:      [String],
  availability:{ type: String },
  verified:    { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Bike', BikeSchema);
