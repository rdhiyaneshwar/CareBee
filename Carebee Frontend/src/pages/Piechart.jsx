import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Diet', 'Sanitation', 'Mobilizing'],
      datasets: [{
        data: [30, 40, 30], 
        backgroundColor: ['#8cc0c4 ', '#36A2EB', '#a7e28c'], 
      }],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    if (chartRef && chartRef.current) {
      const myPieChart = new Chart(chartRef.current, {
        type: 'pie',
        data,
        options,
      });
    }
  }, []);

  return (
    <div className="pie-chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
