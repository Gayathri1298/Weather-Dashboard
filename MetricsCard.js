
import React from 'react';
import { FaTemperatureHigh, FaTint } from 'react-icons/fa';
import './MetricsCard.css';

const MetricsCard = ({ data, location }) => {
  return (
    <div className="metrics-container">
      <h2>{location}</h2>
      <div className="metrics-row">
        <div className="metric-box">
          <div className="metric">
            <div className="metric-header">
              <p className="metric-text">Temperature (C)</p>
              <FaTemperatureHigh className="icon" />
            </div>
            <p className="metric-value">{data.temp_c}°C</p>
          </div>
        </div>
        <div className="metric-box">
          <div className="metric">
            <div className="metric-header">
              <p className="metric-text">Temperature (F)</p>
              <FaTemperatureHigh className="icon" />
            </div>
            <p className="metric-value">{data.temp_f}°F</p>
          </div>
        </div>
        <div className="metric-box">
          <div className="metric">
            <div className="metric-header">
              <p className="metric-text">Humidity</p>
              <FaTint className="icon" />
            </div>
            <p className="metric-value">{data.humidity}%</p>
          </div>
        </div>
        <div className="metric-box">
          <div className="metric">
            <div className="metric-header">
              <p className="metric-text">Wind Speed</p>
              <FaTint className="icon" />
            </div>
            <p className="metric-value">{data.wind_kph} kph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
