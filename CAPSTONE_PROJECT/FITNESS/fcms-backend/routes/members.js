// routes/members.js
const express = require('express');
const Member = require('../models/Member');
const router = express.Router();

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find({}).sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add member
router.post('/', async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
