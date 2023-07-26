import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export default function Casa({ onCasaChange, selectedCasa }) {
  const [casaData, setCasaData] = useState([]);
  const navigate = useNavigate();
  async function fetchData() {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}casas/`,
        {
          headers,
        }
      );
      setCasaData(response.data.data.casas);
    } catch (err) {
      if (err.response.data.message === 'jwt expired') {
        toast.warning('Sesion Expirada \n Inicie Sesion de Nuevo. 😕');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Casa EscuchArte
        </label>
      </div>
      <div className="row justify-content-center">
        <div class="form-group col-sm-6">
          <select
            class="custom-select"
            id="casa"
            name="casa"
            value={selectedCasa}
            onChange={onCasaChange}
          >
            {!selectedCasa && <option value="null">-No especifica-</option>}
            {casaData.map((casa) => (
              <option value={casa.casaId} key={casa.casaId}>
                {casa.nombreCasa} - {casa.canton}
              </option>
            ))}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}
