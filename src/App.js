import React, { useState } from "react";
import './App.css';
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1> Hello World!</h1>
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;
