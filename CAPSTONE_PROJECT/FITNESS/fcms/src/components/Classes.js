// src/components/Classes.js
import React, { useState } from 'react';

const Classes = ({ classes, setClasses }) => {
  const [newClass, setNewClass] = useState({
    name: '',
    time: '',
    trainer: '',
    capacity: ''
  });

  const addClass = (e) => {
    e.preventDefault();
    setClasses([...classes, { 
      id: Date.now(), 
      ...newClass, 
      booked: 0 
    }]);
    setNewClass({ name: '', time: '', trainer: '', capacity: '' });
  };

  return (
    <div>
      <div className="card">
        <h2>🧘 Class Scheduling</h2>
        <p>Manage fitness class schedules and trainer assignments.</p>
      </div>

      <div className="card">
        <h3>Add New Class</h3>
        <form onSubmit={addClass} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label>Class Name</label>
            <input value={newClass.name} onChange={(e) => setNewClass({ ...newClass, name: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="time" value={newClass.time} onChange={(e) => setNewClass({ ...newClass, time: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Trainer</label>
            <input value={newClass.trainer} onChange={(e) => setNewClass({ ...newClass, trainer: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Capacity</label>
            <input type="number" value={newClass.capacity} onChange={(e) => setNewClass({ ...newClass, capacity: e.target.value })} required />
          </div>
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Add Class</button>
          </div>
        </form>
      </div>

      <div className="card">
        <h3>Scheduled Classes ({classes.length})</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Time</th>
              <th>Trainer</th>
              <th>Capacity</th>
              <th>Booked</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(cls => (
              <tr key={cls.id}>
                <td>{cls.name}</td>
                <td>{cls.time}</td>
                <td>{cls.trainer}</td>
                <td>{cls.booked}/{cls.capacity}</td>
                <td>
                  <span className={`status ${cls.booked >= cls.capacity ? 'expired' : 'active'}`}>
                    {cls.booked >= cls.capacity ? 'FULL' : `${cls.booked}/${cls.capacity}`}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
