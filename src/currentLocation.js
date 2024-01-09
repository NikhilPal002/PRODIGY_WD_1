import React from 'react'
import apiKeys from "./apiKeys";
import Clock from "react-live-clock";
import ReactAnimatedWeather from "react-animated-weather";

class weather extends React.Component {

  componentDidMount() {
    if(navigator.geolocation){
      this.getPosition()
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((error) => {
        this.getweather(28.67, 77.22);
        alert("You have disabled location service.");
      });
    }
    else{
      alert("Geolocation is not available");
    }
    
    this.timerID = setInterval(() => this.getWeather(this.state.lat, this.state.lon),
    600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getPosition = (options) =>{
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default weather;


