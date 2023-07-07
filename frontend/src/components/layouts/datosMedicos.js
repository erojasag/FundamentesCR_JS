import React, { useState, useEffect } from 'react';

export default function DatosMedicos(props) {
  const [datosMedicos, setDatosMedicos] = useState({});

  useEffect(() => {
    if (props.datosMedicos !== null) {
      setDatosMedicos(props.datosMedicos);
    } else {
      setDatosMedicos({});
    }
  }, [props.datosMedicos]);

  const handleAlergiasChange = (event) => {
    const updatedDatosMedicos = {
      ...datosMedicos,
      alergias: event.currentTarget.value,
    };
    setDatosMedicos(updatedDatosMedicos);
    props.setUpdatedDatosMedicos(updatedDatosMedicos);
  };
  const handleConsumoChange = (event) => {
    const updatedDatosMedicos = {
      ...datosMedicos,
      consumo: event.currentTarget.value,
    };
    setDatosMedicos(updatedDatosMedicos);
    props.setUpdatedDatosMedicos(updatedDatosMedicos);
  };
  const handleEmbarazoChange = (event) => {
    const updatedDatosMedicos = {
      ...datosMedicos,
      embarazo: event.currentTarget.value,
    };
    setDatosMedicos(updatedDatosMedicos);
    props.setUpdatedDatosMedicos(updatedDatosMedicos);
  };
  const handleHijoshijasChange = (event) => {
    const updatedDatosMedicos = {
      ...datosMedicos,
      hijoshijas: event.currentTarget.value,
    };
    setDatosMedicos(updatedDatosMedicos);
    props.setUpdatedDatosMedicos(updatedDatosMedicos);
  };
  const handleExpedienteHNPChange = (event) => {
    const updatedDatosMedicos = {
      ...datosMedicos,
      expedienteHNP: event.currentTarget.value,
    };
    setDatosMedicos(updatedDatosMedicos);
    props.setUpdatedDatosMedicos(updatedDatosMedicos);
  };
  const handleSituacionParticularChange = (event) => {
    const updatedDatosMedicos = {
      ...datosMedicos,
      situacionParticular: event.currentTarget.value,
    };
    setDatosMedicos(updatedDatosMedicos);
    props.setUpdatedDatosMedicos(updatedDatosMedicos);
  };

  const handleObservacionesChange = (event) => {
    const updatedDatosMedicos = {
      ...datosMedicos,
      observaciones: event.currentTarget.value,
    };
    setDatosMedicos(updatedDatosMedicos);
    props.setUpdatedDatosMedicos(updatedDatosMedicos);
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Datos Medicos
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtAlergias">Alergias</label>
          <select
            class="custom-select"
            id="alergias"
            name="alergias"
            value={datosMedicos.alergias}
            onChange={handleAlergiasChange}
          >
            <option value="null">-No especifica-</option>
            <option value={'true' || 1}>Si</option>
            <option value={'false' || 0}>No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtConsumo">Consumo</label>
          <select
            class="custom-select"
            id="consumo"
            name="consumo"
            value={datosMedicos.consumo}
            onChange={handleConsumoChange}
          >
            <option value="null">-No especifica-</option>
            <option value={'true' || 1}>Si</option>
            <option value={'false' || 0}>No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtEmbarazo">Embarazo</label>
          <select
            class="custom-select"
            id="embarazo"
            name="embarazo"
            value={datosMedicos.embarazo}
            onChange={handleEmbarazoChange}
          >
            <option value="null">-No especifica-</option>
            <option value={'true' || 1}>Si</option>
            <option value={'false' || 0}>No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtHijosHijas">Hijos / Hijas</label>
          <select
            class="custom-select"
            id="hijosHijas"
            name="hijosHijas"
            value={datosMedicos.hijoshijas}
            onChange={handleHijoshijasChange}
          >
            <option value="null">-No especifica-</option>
            <option value={'true' || 1}>Si</option>
            <option value={'false' || 0}>No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtExpedienteHNP">Expediente HNP</label>
          <select
            class="custom-select"
            id="expedienteHNP"
            name="expedienteHNP"
            value={datosMedicos.expedienteHNP}
            onChange={handleExpedienteHNPChange}
          >
            <option value="null">-No especifica-</option>
            <option value={'true' || 1}>Si</option>
            <option value={'false' || 0}>No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtSituacionParticular">Situacion Particular</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="situacionParticular"
            name="situacionParticular"
            value={datosMedicos.situacionParticular}
            onChange={handleSituacionParticularChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtObservaciones">Observaciones</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="observaciones"
            name="observaciones"
            value={datosMedicos.observaciones}
            onChange={handleObservacionesChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
