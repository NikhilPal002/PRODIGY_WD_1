import React, { useState } from "react";
import './App.css';
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;
