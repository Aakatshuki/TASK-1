// components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [isBiometric, setIsBiometric] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Biometric simulation
    if (isBiometric) {
      onLogin({ id: 1, name: 'Admin User', role: 'admin', biometric: true });
      return;
    }
    onLogin({ id: 1, name: formData.email.split('@')[0], role: 'admin' });
  };

  return (
    <div className="card pulse" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#667eea' }}>
        👋 Welcome to FCMS
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          Login
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button
          type="button"
          className="btn"
          onClick={() => setIsBiometric(!isBiometric)}
          style={{ background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)' }}
        >
          🔐 {isBiometric ? 'Use Password' : 'Biometric Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;
