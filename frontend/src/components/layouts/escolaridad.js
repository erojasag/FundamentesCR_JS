import React, { useState, useEffect } from 'react';

export default function Escolaridad(props) {
  const [escolaridad, setEscolaridad] = useState({});

  useEffect(() => {
    if (props.escolaridad !== '') {
      setEscolaridad(props.escolaridad);
    } else {
      setEscolaridad([null]);
    }
  }, [props.escolaridad]);

  const handleInclusionChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      inclusion: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleExpulsionChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      expulsion: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleTipoEducacionChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      tipoEducacion: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleAnoEscolarChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      anoEscolar: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleCentroEducativoChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      centroEducativo: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleRepitenciaChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      repitencia: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleAdecuacionChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      adecuacion: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleUltimoAnoAprobadoChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      ultimoAnoAprobado: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleFechaSalidaChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      fechaSalida: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };

  const handleMotivoSalidaChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      motivoSalida: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };
  const handleReinsercionChange = (event) => {
    const updatedEscolaridad = {
      ...escolaridad,
      reinsercion: event.currentTarget.value,
    };
    setEscolaridad(updatedEscolaridad);
    props.setUpdatedEscolaridad(updatedEscolaridad);
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtEscolaridad" className="col-form-label-lg">
          Escolaridad
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtInclusion">Inclusion Escolar?</label>
          <select
            class="custom-select"
            id="inclusion"
            name="inclusion"
            value={escolaridad.inclusion}
            onChange={handleInclusionChange}
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtExpulsion">Expulsion</label>
          <select
            class="custom-select"
            id="expulsion"
            name="expulsion"
            value={escolaridad.expulsion}
            onChange={handleExpulsionChange}
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtTipoEducacion">Tipo de Educacion</label>
          <select
            class="custom-select"
            id="tipoEducacion"
            name="tipoEducacion"
            value={escolaridad.tipoEducacion}
            onChange={handleTipoEducacionChange}
          >
            <option value="Preescolar Publico">Preescolar Publico</option>
            <option value="Preescolar Publico">Preescolar Privado</option>
            <option value="Educacion General Basica Publica">
              Educacion General Basica Publica
            </option>
            <option value="Educacion General Basica Privada">
              Educacion General Basica Privada
            </option>
            <option value="Educacion Diversificada Publica">
              Educacion Diversificada Publica
            </option>
            <option value="Educacion Diversificada Privada">
              Educacion Diversificada Privada
            </option>
            <option value="Educacion Superior Publica">
              Educacion Superior Publica
            </option>
            <option value="Educacion Superior Privada">
              Educacion Superior Privada
            </option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtAnoEscolar">Año Escolar</label>
          <select
            class="custom-select"
            id="anoEscolar"
            name="anoEscolar"
            value={escolaridad.anoEscolar}
            onChange={handleAnoEscolarChange}
          >
            <option value="Pre-Kinder">Pre-Kinder</option>
            <option value="Kinder">Kinder</option>
            <option value="Preparatoria">Preparatoria</option>
            <option value="Primer Grado">Primer Grado</option>
            <option value="Segundo Grado">Segundo Grado</option>
            <option value="Tercer Grado">Tercer Grado</option>
            <option value="Cuarto Grado">Cuarto Grado</option>
            <option value="Quinto Grado">Quinto Grado</option>
            <option value="Sexto Grado">Sexto Grado</option>
            <option value="Septimo Grado">Septimo Grado</option>
            <option value="Octavo Grado">Octavo Grado</option>
            <option value="Noveno Grado">Noveno Grado</option>
            <option value="Decimo Grado">Decimo Grado</option>
            <option value="Undecimo Grado">Undecimo Grado</option>
            <option value="Duodecimo Grado">Duodecimo Grado</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCentroEducativo">Centro Educativo</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="centroEducativo"
            name="centroEducativo"
            value={escolaridad.centroEducativo}
            onChange={handleCentroEducativoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtRepitencia">Repite Año?</label>
          <select
            class="custom-select"
            id="repitencia"
            name="repitencia"
            value={escolaridad.repitencia}
            onChange={handleRepitenciaChange}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtAdecuacion">Adecuacion?</label>
          <select
            class="custom-select"
            id="adecuacion"
            name="adecuacion"
            value={escolaridad.adecuacion}
            onChange={handleAdecuacionChange}
          >
            <option value="Adecuacion de Acceso">Adecuacion de Acceso</option>
            <option value="Adecuacion Significativa">
              Adecuacion Significativa
            </option>
            <option value="Adecuacion No Significativa">
              Adecuacion No Significativa
            </option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtUltimoAnoAprobado">Ultimo Año Aprobado</label>
          <select
            class="custom-select"
            id="ultimoAnoAprobado"
            name="ultimoAnoAprobado"
            value={escolaridad.ultimoAnoAprobado}
            onChange={handleUltimoAnoAprobadoChange}
          >
            <option value="Pre-Kinder">Pre-Kinder</option>
            <option value="Kinder">Kinder</option>
            <option value="Preparatoria">Preparatoria</option>
            <option value="Primer Grado">Primer Grado</option>
            <option value="Segundo Grado">Segundo Grado</option>
            <option value="Tercer Grado">Tercer Grado</option>
            <option value="Cuarto Grado">Cuarto Grado</option>
            <option value="Quinto Grado">Quinto Grado</option>
            <option value="Sexto Grado">Sexto Grado</option>
            <option value="Septimo Grado">Septimo Grado</option>
            <option value="Octavo Grado">Octavo Grado</option>
            <option value="Noveno Grado">Noveno Grado</option>
            <option value="Decimo Grado">Decimo Grado</option>
            <option value="Undecimo Grado">Undecimo Grado</option>
            <option value="Duodecimo Grado">Duodecimo Grado</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtFechaSalida">Fecha de Salida</label>
          <input
            type="date"
            class="form-control form-control-sm input-validar"
            id="fechaSalida"
            name="fechaSalida"
            value={escolaridad.fechaSalida}
            onChange={handleFechaSalidaChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtMotivoSalida">Motivo de Salida</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="motivoSalida"
            name="motivoSalida"
            value={escolaridad.motivoSalida}
            onChange={handleMotivoSalidaChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtReinsercion">Reinsercion</label>
          <select
            class="custom-select"
            id="reinsercion"
            name="reinsercion"
            value={escolaridad.reinsercion}
            onChange={handleReinsercionChange}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}
