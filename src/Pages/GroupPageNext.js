import React from "react";

const trips = [
  { id: 1, name: "Trip 1", description: "Description of Trip 1" },
  { id: 2, name: "Trip 2", description: "Description of Trip 2" },
  { id: 2, name: "Trip 3", description: "Description of Trip 3" },
  { id: 2, name: "Trip 4", description: "Description of Trip 4" },
  { id: 2, name: "Trip 5", description: "Description of Trip 5" },
  
];

const App = () => {
  const openTrip = (tripName) => {
    alert("Opening " + tripName);
  };

  return (
    <div className="total-grps">
      <div className="total-grps-detail">
      <div className="group-details">
        <h1>Groups Till Now</h1>
        {trips.map((trip) => (
          <div key={trip.id} className="trip">
            <h2 className="color-grp-total">{trip.name}</h2>
            <p className="color-grp-total">{trip.description}</p>
            <button className="open-button" onClick={() => openTrip(trip.name)}>
              Open
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default App;
