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
    const response = await axios.get(`https://fundamentes-dev-7bd493ab77ac.herokuapp.com/stats/statsCasas`, {
      headers,
    });
    const casas = response.data.data.data;

    const chartData = casas.map((item) => item.patientCount); // Extract the 'count' values
    const chartLabels = casas.map((item) => `${item.nombreCasa}`); // Create labels using 'edad'

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
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          padding: 15,
        },
      },
    },
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: generateBackgroundColors(chartData.length),
        hoverOffset: 25,
      },
    ],
  };

  return (
    <React.Fragment>
      <div
        className="container-fluid"
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        <div style={{ paddingBottom: '100%', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
            }}
          >
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CircleChartCasas;
