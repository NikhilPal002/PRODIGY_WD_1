import React, { useState, Component } from 'react'
import axios from "axios";
import apiKeys from './apiKeys';
import ReactAnimatedWeather from "react-animated-weather";

function Forcast(props) {

    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const [weather, setWeather] = useState({});

    const defaults = {
        color: "white",
        size: 112,
        animate: true,
    };

    return (
        <div className='forecast'>
            <div className='forecast-icon'>
                <ReactAnimatedWeather
                    icon={props.icon}
                    color={props.color}
                    size={props.size}
                    animate={defaults.animate}
                />
            </div>
            <div className='today-weather'>
                <h3> {props.weather} </h3>
                <div className='search-box'>
                    <input type="text"
                        className='search-box'
                        placeholder='search any city'
                        onChange={(e) => setQuery(e.target.value)}
                        value={query} />
                    <div className='img-box'>
                        {" "}
                        {/* <img src=''
                            onClick={search} /> */}
                    </div>
                </div>
                <ul>
                    {typeof weather.main != "undefined" ? (
                        <div>
                            {" "}
                            <li className="cityHead">
                                <p>
                                    {weather.name}, {weather.sys.country}
                                </p>
                                <img
                                    className="temp"
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                />
                            </li>
                            <li>
                                Temperature{" "}
                                <span className="temp">
                                    {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
                                </span>
                            </li>
                            <li>
                                Humidity{" "}
                                <span className="temp">
                                    {Math.round(weather.main.humidity)}%
                                </span>
                            </li>
                            <li>
                                Visibility{" "}
                                <span className="temp">
                                    {Math.round(weather.visibility)} mi
                                </span>
                            </li>
                            <li>
                                Wind Speed{" "}
                                <span className="temp">
                                    {Math.round(weather.wind.speed)} Km/h
                                </span>
                            </li>
                        </div>
                    ) : (
                        <li>
                            {error.query} {error.message}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Forcast;
