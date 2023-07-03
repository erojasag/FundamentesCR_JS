import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import Cookies from 'js-cookie';
import axios from 'axios';
import generateBackgroundColors from './randomColor';

const CircleChartCasas = () => {
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  const fetchData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get(`http://localhost:3000/stats/statsCasas`, {
      headers,
    });
    const casas = response.data.data.data;

    const chartData = casas[0].map((item) => item.patientCount); // Extract the 'count' values
    const chartLabels = casas[0].map((item) => `${item.nombreCasa}`); // Create labels using 'edad'

    setChartLabels(chartLabels);
    setChartData(chartData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: generateBackgroundColors(chartData.length),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircleChartCasas;
