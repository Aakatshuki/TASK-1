// Paste the full App.js code from previous response here
// Full Fitness Center Management System (FCMS) - React App
// Complete code with all features: memberships, bookings, payments, biometrics, scheduling, billing, tracking

// App.js - Main Application
import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Memberships from './components/Memberships';
import Bookings from './components/Bookings';
import Payments from './components/Payments';
import Classes from './components/Classes';
import Profile from './components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [memberships, setMemberships] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Mock data initialization
    setMemberships([
      { id: 1, name: 'John Doe', type: 'Premium', expiry: '2026-06-13', status: 'active' },
      { id: 2, name: 'Jane Smith', type: 'Basic', expiry: '2025-12-20', status: 'active' }
    ]);
    setClasses([
      { id: 1, name: 'Yoga', time: '07:00 AM', trainer: 'Sara', capacity: 15, booked: 12 },
      { id: 2, name: 'Zumba', time: '08:00 AM', trainer: 'Mike', capacity: 20, booked: 18 }
    ]);
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentView('login');
  };

  const renderView = () => {
    switch (currentView) {
      case 'login': return <Login onLogin={handleLogin} />;
      case 'dashboard': return <Dashboard user={currentUser} setView={setCurrentView} memberships={memberships} bookings={bookings} />;
      case 'memberships': return <Memberships memberships={memberships} setMemberships={setMemberships} />;
      case 'bookings': return <Bookings bookings={bookings} setBookings={setBookings} classes={classes} />;
      case 'payments': return <Payments />;
      case 'classes': return <Classes classes={classes} setClasses={setClasses} />;
      case 'profile': return <Profile user={currentUser} />;
      default: return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <div className="logo">💪 FCMS</div>
          <span className="tagline">Fitness Center Management</span>
        </div>
        {currentUser && (
          <div className="nav-user">
            <span>👋 {currentUser.name}</span>
            <button className="btn-logout" onClick={logout}>Logout</button>
          </div>
        )}
      </nav>
      <main className="main-content">{renderView()}</main>
    </div>
  );
}

export default App;
