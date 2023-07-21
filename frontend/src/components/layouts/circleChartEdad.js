import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import Cookies from 'js-cookie';
import axios from 'axios';
import generateBackgroundColors from './randomColor';
import Navbar from '../layouts/navbar';
import Error403 from './Error403';

const CircleChartEdad = () => {
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [isForbidden, setIsForbidden] = useState(false);

  const fetchData = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}stats/pacientesPorEdad`,
        { headers }
      );
      const edades = response.data.data.data;

      const chartData = edades.map((item) => `${item.count}`); // Extract the 'count' values
      const chartLabels = edades.map((item) => `Edad: ${item.edad}`); // Create labels using 'edad'

      setChartLabels(chartLabels);
      setChartData(chartData);
    } catch (err) {
      if (err.response.status === 403) {
        setIsForbidden(true);
        return;
      }
    }
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
      <Navbar />
      {isForbidden ? (
        <Error403 />
      ) : (
        <>
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
        </>
      )}
    </React.Fragment>
  );
};

export default CircleChartEdad;
