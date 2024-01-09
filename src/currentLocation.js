import React from 'react'

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
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default weather;


