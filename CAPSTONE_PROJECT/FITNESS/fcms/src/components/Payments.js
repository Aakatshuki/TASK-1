// src/components/Payments.js
import React, { useState } from 'react';

const Payments = () => {
  const [paymentData, setPaymentData] = useState({
    member: '',
    amount: '',
    method: 'card',
    status: 'pending'
  });

  const [transactions, setTransactions] = useState([
    { id: 1, member: 'John Doe', amount: '$99', method: 'Card', date: '2025-12-12', status: 'completed' },
    { id: 2, member: 'Jane Smith', amount: '$49', method: 'Cash', date: '2025-12-11', status: 'completed' }
  ]);

  const processPayment = (e) => {
    e.preventDefault();
    setTransactions([{
      id: Date.now(),
      member: paymentData.member,
      amount: `$${paymentData.amount}`,
      method: paymentData.method,
      date: new Date().toISOString().split('T')[0],
      status: 'completed'
    }, ...transactions]);
    setPaymentData({ member: '', amount: '', method: 'card', status: 'pending' });
  };

  return (
    <div>
      <div className="card">
        <h2>💳 Payment Processing</h2>
        <p>Automated billing and payment collection system.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Process New Payment</h3>
          <form onSubmit={processPayment}>
            <div className="form-group">
              <label>Member Name</label>
              <input
                value={paymentData.member}
                onChange={(e) => setPaymentData({ ...paymentData, member: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                value={paymentData.amount}
                onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })}
                placeholder="$99"
                required
              />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select
                value={paymentData.method}
                onChange={(e) => setPaymentData({ ...paymentData, method: e.target.value })}
              >
                <option value="card">💳 Card</option>
                <option value="cash">💵 Cash</option>
                <option value="upi">📱 UPI</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success" style={{ width: '100%' }}>
              Process Payment
            </button>
          </form>
        </div>

        <div className="card">
          <h3>Recent Transactions ({transactions.length})</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 5).map(t => (
                <tr key={t.id}>
                  <td>{t.member}</td>
                  <td>{t.amount}</td>
                  <td>{t.method}</td>
                  <td>{t.date}</td>
                  <td><span className={`status ${t.status}`}>{t.status.toUpperCase()}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
