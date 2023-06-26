import React, { useState, useEffect } from 'react';

export default function DatosMedicos(props) {
  const { datosMedicos } = props;
  const [alergias, setAlergias] = useState(null);
  const [consumo, setConsumo] = useState(null);
  const [embarazo, setEmbarazo] = useState(null);
  const [hijosHijas, setHijoshijas] = useState(null);
  const [expedienteHNP, setExpedienteHNP] = useState(false);
  const [situacionParticular, setSituacionParticular] = useState('');
  const [observaciones, setObservaciones] = useState('');

  useEffect(() => {
    if (datosMedicos !== null) {
      console.log(datosMedicos);
      setAlergias(datosMedicos.alergias);
      setConsumo(datosMedicos.consumo);
      setEmbarazo(datosMedicos.embarazo);
      setHijoshijas(datosMedicos.hijoshijas);
      setExpedienteHNP(datosMedicos.expedienteHNP);
      setSituacionParticular(datosMedicos.situacionParticular);
      setObservaciones(datosMedicos.observaciones);
    } else {
      setAlergias(null);
      setConsumo(null);
      setEmbarazo(null);
      setHijoshijas(null);
      setExpedienteHNP(null);
      setSituacionParticular('');
      setObservaciones('');
    }
  }, [datosMedicos]);

  const handleAlergiasChange = (event) => {
    setAlergias(event.currentTarget.value);
    props.setUpdatedDatosMedicos({
      ...props.datosMedicos,
      alergias: event.currentTarget.value,
    });
  };
  const handleConsumoChange = (event) => {
    setConsumo(event.currentTarget.value);
    props.setUpdatedDatosMedicos({
      ...props.datosMedicos,
      consumo: event.currentTarget.value,
    });
  };
  const handleEmbarazoChange = (event) => {
    setEmbarazo(event.currentTarget.value);
    props.setUpdatedDatosMedicos({
      ...props.datosMedicos,
      embarazo: event.currentTarget.value,
    });
  };
  const handleHijoshijasChange = (event) => {
    setHijoshijas(event.currentTarget.value);
    props.setUpdatedDatosMedicos({
      ...props.datosMedicos,
      hijoshijas: event.currentTarget.value,
    });
  };
  const handleExpedienteHNPChange = (event) => {
    setExpedienteHNP(event.currentTarget.value);
    props.setUpdatedDatosMedicos({
      ...props.datosMedicos,
      expedienteHNP: event.currentTarget.value,
    });
  };
  const handleSituacionParticularChange = (event) => {
    setSituacionParticular(event.currentTarget.value);
    props.setUpdatedDatosMedicos({
      ...props.datosMedicos,
      situacionParticular: event.currentTarget.value,
    });
  };

  const handleObservacionesChange = (event) => {
    setObservaciones(event.currentTarget.value);
    props.setUpdatedDatosMedicos({
      ...props.datosMedicos,
      observaciones: event.currentTarget.value,
    });
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
            value={alergias}
            onChange={handleAlergiasChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtConsumo">Consumo</label>
          <select
            class="custom-select"
            id="consumo"
            name="consumo"
            value={consumo}
            onChange={handleConsumoChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtEmbarazo">Embarazo</label>
          <select
            class="custom-select"
            id="embarazo"
            name="embarazo"
            value={embarazo}
            onChange={handleEmbarazoChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtHijosHijas">Hijos / Hijas</label>
          <select
            class="custom-select"
            id="hijosHijas"
            name="hijosHijas"
            value={hijosHijas}
            onChange={handleHijoshijasChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtExpedienteHNP">Expediente HNP</label>
          <select
            class="custom-select"
            id="expedienteHNP"
            name="expedienteHNP"
            value={expedienteHNP}
            onChange={handleExpedienteHNPChange}
          >
            <option value="null">-No asignado-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtSituacionParticular">Situacion Particular</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="situacionParticular"
            name="situacionParticular"
            value={situacionParticular}
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
            value={observaciones}
            onChange={handleObservacionesChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
