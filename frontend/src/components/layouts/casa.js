import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Casa({ onCasaChange, selectedCasa }) {
  const [casaData, setCasaData] = useState([]);

  async function fetchData() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get('http://localhost:3000/casas/', {
      headers,
    });
    setCasaData(response.data.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Casa Escucharte
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
            {selectedCasa === null ||
              (selectedCasa === undefined && (
                <option value="null">-No especifica-</option>
              ))}
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
