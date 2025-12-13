// src/components/Navbar.js
import React from 'react';

const Navbar = ({ currentUser, currentView, setCurrentView, onLogout, memberships, bookings, classes }) => {
  const navItems = [
    { id: 'dashboard', label: '🏠 Dashboard', icon: '📊' },
    { id: 'memberships', label: '👥 Members', icon: '👥', count: memberships?.length || 0 },
    { id: 'classes', label: '🧘 Classes', icon: '📅', count: classes?.length || 0 },
    { id: 'bookings', label: '📅 Bookings', icon: '📋', count: bookings?.length || 0 },
    { id: 'payments', label: '💳 Payments', icon: '💰' },
    { id: 'profile', label: '👤 Profile', icon: '⚙️' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="logo">💪 FCMS</div>
        <span className="tagline">Fitness Center Management</span>
      </div>

      {currentUser && (
        <>
          <div className="nav-links">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-link ${currentView === item.id ? 'active' : ''}`}
                onClick={() => setCurrentView(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.count > 0 && (
                  <span className="nav-badge">{item.count}</span>
                )}
              </button>
            ))}
          </div>

          <div className="nav-user">
            <span className="user-greeting">👋 {currentUser.name}</span>
            <button className="btn-logout" onClick={onLogout}>
              🚪 Logout
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
