// src/components/Profile.js
import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    goals: '',
    performance: {
      workouts: 45,
      calories: 12500,
      avgHeartRate: 145
    }
  });

  const updateProfile = (e) => {
    e.preventDefault();
    // Simulate API update
    alert('Profile updated successfully! ✅');
  };

  return (
    <div>
      <div className="card">
        <h2>👤 Member Profile</h2>
        <p>Personalized fitness tracking and performance analytics.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Profile Information</h3>
          <form onSubmit={updateProfile}>
            <div className="form-group">
              <label>Full Name</label>
              <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Fitness Goals</label>
              <textarea 
                value={profile.goals} 
                onChange={(e) => setProfile({ ...profile, goals: e.target.value })}
                rows="3"
                placeholder="Weight loss, muscle gain, marathon training..."
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Update Profile
            </button>
          </form>
        </div>

        <div className="card">
          <h3>Performance Tracking</h3>
          <div className="stat-card" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <div className="stat-number">{profile.performance.workouts}</div>
            <div>Workouts this month</div>
          </div>
          <div className="stat-card" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <div className="stat-number">{profile.performance.calories.toLocaleString()}</div>
            <div>Calories burned</div>
          </div>
          <div className="stat-card" style={{ textAlign: 'left' }}>
            <div className="stat-number">{profile.performance.avgHeartRate} bpm</div>
            <div>Avg Heart Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
