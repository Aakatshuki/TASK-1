// routes/classes.js
const express = require('express');
const Class = require('../models/Class');
const router = express.Router();

// Get all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.find({}).sort({ date: 1 });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add class
router.post('/', async (req, res) => {
  try {
    const cls = new Class({
      ...req.body,
      date: new Date(req.body.date || Date.now())
    });
    await cls.save();
    res.status(201).json(cls);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
