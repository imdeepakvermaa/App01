// Dashboard.js

import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="sidebar-section">
          <h2>All Expenses</h2>
        </div>
        <div className="sidebar-section">
          <h2>GROUPS</h2>
          <p>You do not have any groups yet.</p>
          <button className="sidebar-button">Add</button>
        </div>
        <div className="sidebar-section">
          <h2>FRIENDS</h2>
          <p>You have not added any friends yet.</p>
          <button className="sidebar-button">Add</button>
          <div className="invite-section">
            <h3>Add friends</h3>
            <div className="dashboard-invite">
              <input
                className="invite-input"
                type="email"
                placeholder="Enter email"
              />
              <button className="invite-button">Send invite</button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-main">
        <h1>Welcome to BillBuddy!</h1>
        <p>BillBuddy helps you split bills with friends.</p>
        <p>
          Click “Add an expense” above to get started, or invite some friends
          first!
        </p>

        <div className="">
          <div className="dashboard-buttons">
            <button className="dashboard-button">Add an expense</button>
            <button className="">Settle up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
