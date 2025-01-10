import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: data.map((day: any) => day.date),
    datasets: [
      {
        label: 'Temperature',
        data: data.map((day: any) => day.temp),
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default WeatherChart;
