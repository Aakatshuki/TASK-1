// models/Member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  type: { type: String, enum: ['Basic', 'Premium', 'VIP'], default: 'Basic' },
  expiry: { type: Date, required: true },
  status: { type: String, enum: ['active', 'expired', 'suspended'], default: 'active' },
  phone: String,
  biometricId: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Member', memberSchema);
