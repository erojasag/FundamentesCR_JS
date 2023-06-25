import React, { useState, useEffect } from 'react';

export default function Escolaridad(props) {
  const { escolaridad } = props;

  const [inclusion, setInclusion] = useState(null);
  const [expulsion, setExpulsion] = useState(null);
  const [tipoEducacion, setTipoEducacion] = useState('');
  const [anoEscolar, setAnoEscolar] = useState('');
  const [centroEducativo, setCentroEducativo] = useState('');
  const [repitencia, setRepitencia] = useState('');
  const [adecuacion, setAdecuacion] = useState('');
  const [ultimoAnoAprobado, setUltimoAnoAprobado] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [motivoSalida, setMotivoSalida] = useState('');
  const [reinsercion, setReinsercion] = useState('');

  useEffect(() => {
    if (escolaridad !== '') {
      setInclusion(escolaridad.inclusion);
      setExpulsion(escolaridad.expulsion);
      setTipoEducacion(escolaridad.tipoEducacion);
      setAnoEscolar(escolaridad.anoEscolar);
      setCentroEducativo(escolaridad.centroEducativo);
      setRepitencia(escolaridad.repitencia);
      setAdecuacion(escolaridad.adecuacion);
      setUltimoAnoAprobado(escolaridad.ultimoAnoAprobado);
      setFechaSalida(escolaridad.fechaSalida);
      setMotivoSalida(escolaridad.motivoSalida);
      setReinsercion(escolaridad.reinsercion);
    } else {
      setInclusion(null);
      setExpulsion(null);
      setTipoEducacion('');
      setAnoEscolar('');
      setCentroEducativo('');
      setRepitencia(null);
      setAdecuacion(null);
      setUltimoAnoAprobado('');
      setFechaSalida('');
      setMotivoSalida('');
      setReinsercion(null);
    }
  }, [escolaridad]);

  const handleInclusionChange = (event) => {
    setInclusion(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      inclusion: event.currentTarget.value,
    });
  };
  const handleExpulsionChange = (event) => {
    setExpulsion(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      expulsion: event.currentTarget.value,
    });
  };
  const handleTipoEducacionChange = (event) => {
    setTipoEducacion(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      tipoEducacion: event.currentTarget.value,
    });
  };
  const handleAnoEscolarChange = (event) => {
    setAnoEscolar(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      anoEscolar: event.currentTarget.value,
    });
  };
  const handleCentroEducativoChange = (event) => {
    setCentroEducativo(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      centroEducativo: event.currentTarget.value,
    });
  };
  const handleRepitenciaChange = (event) => {
    setRepitencia(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      repitencia: event.currentTarget.value,
    });
  };
  const handleAdecuacionChange = (event) => {
    setAdecuacion(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      adecuacion: event.currentTarget.value,
    });
  };
  const handleUltimoAnoAprobadoChange = (event) => {
    setUltimoAnoAprobado(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      ultimoAnoAprobado: event.currentTarget.value,
    });
  };
  const handleFechaSalidaChange = (event) => {
    setFechaSalida(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      fechaSalida: event.currentTarget.value,
    });
  };

  const handleMotivoSalidaChange = (event) => {
    setMotivoSalida(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      motivoSalida: event.currentTarget.value,
    });
  };
  const handleReinsercionChange = (event) => {
    setReinsercion(event.currentTarget.value);
    props.setUpdatedEscolaridad({
      ...props.escolaridad,
      reinsercion: event.currentTarget.value,
    });
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
            value={inclusion}
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
            value={expulsion}
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
            value={tipoEducacion}
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
            value={anoEscolar}
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
            value={centroEducativo}
            onChange={handleCentroEducativoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtRepitencia">Repite Año?</label>
          <select
            class="custom-select"
            id="repitencia"
            name="repitencia"
            value={repitencia}
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
            value={adecuacion}
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
            value={ultimoAnoAprobado}
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
            value={fechaSalida}
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
            value={motivoSalida}
            onChange={handleMotivoSalidaChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtReinsercion">Reinsercion</label>
          <select
            class="custom-select"
            id="reinsercion"
            name="reinsercion"
            value={reinsercion}
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