import React, { useState, useEffect } from 'react';
import fetchCustomers from './api';

function RewardPointsCalculator() {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Simulate an asynchronous API call to fetch data
    fetchCustomers().then((data) => {
      setCustomerData(data);
    });
  }, []);

  // Calculate reward points for a single transaction
  const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += (amount - 100) * 2;
      amount = 100;
    }
    if (amount > 50) {
      points += (amount - 50);
    }
    return points;
  };

  // Calculate reward points for a customer
  const calculateTotalPoints = (transactions) => {
    return transactions.reduce((total, transaction) => {
      return total + calculatePoints(transaction.amount);
    }, 0);
  };

  return (
    <div>
      <h1>Reward Points Calculator</h1>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Month</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer, index) => (
            <tr key={index}>
              <td>{customer.customerId}</td>
              <td>{customer.month}</td>
              <td>{calculateTotalPoints([customer])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RewardPointsCalculator;