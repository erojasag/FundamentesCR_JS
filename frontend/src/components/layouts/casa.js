import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Casa({ onCasaChange, selectedCasa }) {
  const [data, setData] = useState([]);
  const [casa] = useState('');

  async function fetchData() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get('http://localhost:3000/casas/', {
      headers,
    });
    setData(response.data.data.data);
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
            {data.map((casa) => (
              <option value={casa.casaId} key={casa.casaId}>
                {casa.nombreCasa}
              </option>
            ))}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}
