import React from 'react';
import './Chart.css';

const Chart = ({ data, timeFrame }) => {

  return (
    <div className="chart">
      <h3>{timeFrame} Data</h3>
    </div>
  );
};

export default Chart;
