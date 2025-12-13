// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ['card', 'cash', 'upi'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  transactionId: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
