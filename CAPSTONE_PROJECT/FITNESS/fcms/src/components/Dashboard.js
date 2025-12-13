// components/Dashboard.js
import React from 'react';

const Dashboard = ({ user, setView, memberships, bookings }) => {
  return (
    <div>
      <div className="card">
        <h2>🏠 Dashboard</h2>
        <p>Welcome back, <strong>{user.name}</strong>! Here's what's happening today.</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-number">{memberships.length}</div>
          <div>Active Members</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{bookings.length}</div>
          <div>Today's Bookings</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">$12,450</div>
          <div>Monthly Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div>Member Satisfaction</div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => setView('memberships')}>
            👥 Manage Members
          </button>
          <button className="btn btn-success" onClick={() => setView('bookings')}>
            📅 Bookings
          </button>
          <button className="btn" onClick={() => setView('classes')}>
            🧘 Classes
          </button>
          <button className="btn" onClick={() => setView('payments')}>
            💳 Payments
          </button>
          <button className="btn" onClick={() => setView('profile')}>
            👤 Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
