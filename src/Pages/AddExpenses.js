// AddExpenseForm.js

import React, { useEffect, useState } from 'react';

const AddExpenses = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      // Update the date every second
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      // Cleanup the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, []);
  
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  return (
    <div className="add-expense-container">
      <h2>Add an Expense</h2>

      <div className="expense-form">
        <label>With you and:</label>
        <input type="text" placeholder="Enter names or email addresses" />

        <label>Enter a description</label>
        <input type="text" placeholder="Description" />

        <div className="expense-amount">
          <span>₹</span>
          <input type="number" step="0.01" placeholder="0.00" />
        </div>

        <p>Paid by you and split equally.</p>
        <p>(₹0.00/person)</p>

        <p>{formattedDate}</p>

        <div className="add-image-notes">
          <button className="add-image-notes-btn">Add image/notes</button>
        </div>

        <div className="buttons-container">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenses;
