// models/Class.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  trainer: { type: String, required: true },
  capacity: { type: Number, required: true },
  booked: { type: Number, default: 0 },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Class', classSchema);
