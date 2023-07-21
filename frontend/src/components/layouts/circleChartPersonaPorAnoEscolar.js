import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import Cookies from 'js-cookie';
import axios from 'axios';
import Error403 from '../Views/Error403';
import generateBackgroundColors from './randomColor';

const CircleChartPersonasPorAnoEscolar = () => {
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
        `${process.env.REACT_APP_BACKEND_API}stats/pacientesPorAnoEscolar`,
        { headers }
      );
      const personasPorGenero = response.data.data.data;

      const chartData = personasPorGenero.map(
        (item) => `${item.cantidad_ninos_x_ano_escolar}`
      ); // Extract the 'count' values
      const chartLabels = personasPorGenero.map(
        (item) => `${item.anoEscolar}: ${item.cantidad_ninos_x_ano_escolar}`
      ); // Create labels using 'edad'

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

export default CircleChartPersonasPorAnoEscolar;
