const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // demo user
  const users = [
    {
      id: 1,
      email: 'admin@fcms.com',
      // password: "password"
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
      role: 'admin'
    }
  ];

  const user = users.find(u => u.email === email);
  const ok = user && await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: { id: user.id, name: email.split('@')[0], role: user.role }
  });
});

module.exports = router;
