// components/Memberships.js
import React, { useState } from 'react';

const Memberships = ({ memberships, setMemberships }) => {
  const [newMember, setNewMember] = useState({ name: '', type: 'Basic', expiry: '' });

  const addMember = (e) => {
    e.preventDefault();
    setMemberships([...memberships, { 
      id: Date.now(), 
      ...newMember, 
      status: 'active' 
    }]);
    setNewMember({ name: '', type: 'Basic', expiry: '' });
  };

  return (
    <div>
      <div className="card">
        <h2>👥 Membership Management</h2>
        <form onSubmit={addMember} style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Member Name</label>
              <input
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                value={newMember.type}
                onChange={(e) => setNewMember({ ...newMember, type: e.target.value })}
              >
                <option>Basic</option>
                <option>Premium</option>
                <option>VIP</option>
              </select>
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="date"
                value={newMember.expiry}
                onChange={(e) => setNewMember({ ...newMember, expiry: e.target.value })}
                required
              />
            </div>
            <div className="form-group" style={{ display: 'flex', alignItems: 'end' }}>
              <button type="submit" className="btn btn-success" style={{ width: '100%' }}>
                Add Member
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="card">
        <h3>Active Members ({memberships.length})</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Expiry</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.type}</td>
                <td>{member.expiry}</td>
                <td><span className={`status ${member.status}`}>{member.status.toUpperCase()}</span></td>
                <td>
                  <button className="btn btn-danger" style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem' }}>
                    Renew
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Memberships;
