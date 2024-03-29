import React, { useState, useEffect } from 'react';

export default function DinamicaFamiliar(props) {
  const [dinamicaFamiliar, setDinamicaFamiliar] = useState({});

  useEffect(() => {
    if (props.dinamicaFamiliar) {
      setDinamicaFamiliar(props.dinamicaFamiliar);
    } else {
      setDinamicaFamiliar({
        privLibertad: null,
        violenciaMujer: null,
        violenciaFami: null,
        acontecimientoRelev: '',
      });
    }
  }, [props.dinamicaFamiliar]);

  const handlePrivLibertadChange = (event) => {
    const updatedDinamicaFamiliar = {
      ...dinamicaFamiliar,
      privLibertad: event.currentTarget.value,
    };
    setDinamicaFamiliar(updatedDinamicaFamiliar);
    props.setUpdatedDinamicaFamiliar(updatedDinamicaFamiliar);
  };

  const handleViolenciaMujerChange = (event) => {
    const updatedDinamicaFamiliar = {
      ...dinamicaFamiliar,
      violenciaMujer: event.currentTarget.value,
    };
    setDinamicaFamiliar(updatedDinamicaFamiliar);
    props.setUpdatedDinamicaFamiliar(updatedDinamicaFamiliar);
  };

  const handleViolenciaFamiChange = (event) => {
    const updatedDinamicaFamiliar = {
      ...dinamicaFamiliar,
      violenciaFami: event.currentTarget.value,
    };
    setDinamicaFamiliar(updatedDinamicaFamiliar);
    props.setUpdatedDinamicaFamiliar(updatedDinamicaFamiliar);
  };

  const handleAcontecimientoRelevChange = (event) => {
    const updatedDinamicaFamiliar = {
      ...dinamicaFamiliar,
      acontecimientoRelev: event.currentTarget.value,
    };
    setDinamicaFamiliar(updatedDinamicaFamiliar);
    props.setUpdatedDinamicaFamiliar(updatedDinamicaFamiliar);
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Dinámica Familiar
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtPrivadoLibertad">Privado de Libertad</label>
          <select
            class="custom-select"
            id="privLibertad"
            name="privLibertad"
            value={dinamicaFamiliar.privLibertad}
            onChange={handlePrivLibertadChange}
          >
            <option value="null">-No específica-</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtViolenciaMujer">Violencia contra mujeres</label>
          <select
            class="custom-select"
            id="violenciaMujer"
            name="violenciaMujer"
            value={dinamicaFamiliar.violenciaMujer}
            onChange={handleViolenciaMujerChange}
          >
            <option value="null">-No específica-</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtViolenciaFamiliar">Violencia Familiar</label>
          <select
            class="custom-select"
            id="violenciaFami"
            name="violenciaFami"
            value={dinamicaFamiliar.violenciaFami}
            onChange={handleViolenciaFamiChange}
          >
            <option value="null">-No específica-</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtAcontecimientoRelev">Acontecimientos Relevantes</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="acontecimientoRelev"
            name="acontecimientoRelev"
            value={dinamicaFamiliar.acontecimientoRelev}
            onChange={handleAcontecimientoRelevChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
