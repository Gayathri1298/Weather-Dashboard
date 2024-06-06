
import React from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.css';

const Calendar = ({ setTimeFrame, handleDateChange, minDate, maxDate }) => {
  return (
    <div className="calendar">
      <ReactCalendar 
        onChange={handleDateChange} 
        minDate={minDate} 
        maxDate={maxDate}
      />
    </div>
  );
};

export default Calendar;
