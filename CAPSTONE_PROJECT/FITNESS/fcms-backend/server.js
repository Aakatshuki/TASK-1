const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/members', require('./routes/members'));
app.use('/api/classes', require('./routes/classes'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/payments', require('./routes/payments'));


const PORT = process.env.PORT || 4000;  // Reads PORT=4000 from .env
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${4000}`);  // Shows 4000
});
