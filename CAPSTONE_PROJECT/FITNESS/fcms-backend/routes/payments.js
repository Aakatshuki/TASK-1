// routes/payments.js
const express = require('express');
const Payment = require('../models/Payment');
const router = express.Router();

router.get('/', async (req, res) => {
  const payments = await Payment.find({}).populate('memberId').sort({ date: -1 });
  res.json(payments);
});

router.post('/', async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();
  res.status(201).json(payment);
});

module.exports = router;
