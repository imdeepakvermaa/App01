import React, { useState, useEffect } from "react";

const mockData = {
  tripName: "Awesome Trip",
  people: [
    { id: 1, name: "John Doe", expenses: 100 },
    { id: 2, name: "Jane Doe", expenses: 150 },
    // Add more people as needed
  ],
};

const TripDetails = ({ tripName, people, onAddExpense, onSettleUp }) => {
  return (
    <div className="trip-details">
      <h1>{tripName}</h1>
      <div className="expenses-list">
        <h2>People and Expenses</h2>
        <ul>
          {people &&
            people.map((person) => (
              <li key={person.id}>
                <span>{person.name}</span>
                <span>${person.expenses}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="action-buttons">
        <button onClick={onAddExpense}>Add Expenses</button>
        <button onClick={onSettleUp}>Settle Up</button>
      </div>
    </div>
  );
};

const App = () => {
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    setTripData(mockData);
  }, []);

  const handleAddExpense = () => {
    alert("Adding expenses!");
  };

  const handleSettleUp = () => {
    alert("Settling up!");
  };

  return (
    <div className="app">
      {tripData ? (
        <TripDetails
          tripName={tripData.tripName}
          people={tripData.people}
          onAddExpense={handleAddExpense}
          onSettleUp={handleSettleUp}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
