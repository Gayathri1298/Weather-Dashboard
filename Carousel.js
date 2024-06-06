import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="carousel">
      {data.map((item, idx) => (
        <div key={idx} className={`carousel-item ${index === idx ? 'active' : ''}`}>
          <h3>{item.location.name}</h3>
          <p>Temperature: {item.current.temp_c}°C</p>
          <p>Humidity: {item.current.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
