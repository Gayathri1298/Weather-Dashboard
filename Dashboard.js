import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../utils/api';
import Calendar from './Calendar';
import MetricsCard from './MetricsCard';
import './Dashboard.css';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('New York');
  const [timeFrame, setTimeFrame] = useState('Daily');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchWeatherData(selectedLocation);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    getData();
  }, [selectedLocation]);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarVisible(false); 
  };


  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(today.getMonth() + 1);

  return (
    <div className="dashboard">
      <div className="country-names">
        <span onClick={() => handleLocationChange('New York')}>New York</span>
        <span onClick={() => handleLocationChange('London')}>London</span>
        <span onClick={() => handleLocationChange('India')}>India</span>
      </div>
      <div className="calendar-toggle" onClick={toggleCalendarVisibility}>
        {selectedDate.toDateString()}
      </div>
      {isCalendarVisible && (
        <Calendar 
          setTimeFrame={setTimeFrame} 
          handleDateChange={handleDateChange}
          minDate={today}
          maxDate={nextMonth}
        />
      )}
      <div className="metrics">
        {weatherData && weatherData.current && (
          <MetricsCard data={weatherData.current} location={selectedLocation} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
