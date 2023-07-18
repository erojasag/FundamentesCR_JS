import React, { useState, useEffect } from 'react';

export default function AspectoClinico(props) {
  const [aspectoClinico, setAspectoClinico] = useState({});

  console.log(props);

  useEffect(() => {
    if (props.aspectoClinico.lenght === 0) {
      setAspectoClinico({
        ideacionAutolesiones: null,
        puntajeIdeacion: 0,
        observacionesIdeacion: '',
        personaSignificativa: null,
        puntajePersonaSignificativa: 0,
        observacionesPersonaSignificativa: '',
        violenciaIntrafamiliar: null,
        puntajeViolenciaIntrafamiliar: 0,
        observacionesViolenciaIntrafamiliar: '',
        violenciaSexual: false,
        puntajeViolenciaSexual: 0,
        observacionesViolenciaSexual: '',
        violenciaPsicologica: null,
        puntajeViolenciaPsicologica: 0,
        observacionesViolenciaPsicologica: '',
        violenciaFisicaFamiliar: false,
        puntajeViolenciaFisicaFamiliar: 0,
        observacionesViolenciaFisicaFamiliar: '',
        personasPrivadasLibertad: null,
        puntajePersonasPrivadasLibertad: 0,
        observacionesPersonasPrivadasLibertad: '',
        consumoDrogasFamilia: false,
        puntajeConsumoDrogasFamilia: 0,
        observacionesConsumoDrogasFamilia: '',
        abandonoFamiliar: null,
        puntajeAbandonoFamiliar: 0,
        observacionesAbandonoFamiliar: '',
        relacionEmocionesCuerpo: null,
        puntajeRelacionEmocionesCuerpo: 0,
        observacionesRelacionEmocionesCuerpo: '',
        responsabilidadCuidadores: false,
        puntajeResponsabilidadCuidadores: 0,
        observacionesResponsabilidadCuidadores: '',
        puntajeTotal: 0,
        prioridad: '',
      });
    } else {
      setAspectoClinico(props.aspectoClinico);
    }
  }, [props.aspectoClinico]);

  const handleIdeacionLesiones = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      ideacionAutolesiones: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeIdeacion = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeIdeacion: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesIdeacion = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesIdeacion: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePersonaSignificativa = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      personaSignificativa: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handlePuntajePersonaSignificativa = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajePersonaSignificativa: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesPersonaSignificativa = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesPersonaSignificativa: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleViolenciaIntrafamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      violenciaIntrafamiliar: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeViolenciaIntrafamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeViolenciaIntrafamiliar: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesViolenciaIntrafamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesViolenciaIntrafamiliar: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleViolenciaSexual = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      violenciaSexual: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeViolenciaSexual = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeViolenciaSexual: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesViolenciaSexual = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesViolenciaSexual: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleViolenciaPsicologica = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      violenciaPsicologica: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handlePuntajeViolenciaPsicologica = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeViolenciaPsicologica: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handleObservacionesViolenciaPsicologica = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesViolenciaPsicologica: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handleViolenciaFisicaFamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      violenciaFisicaFamiliar: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handlePuntajeViolenciaFisicaFamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeViolenciaFisicaFamiliar: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesViolenciaFisicaFamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesViolenciaFisicaFamiliar: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handlePersonasPrivadasLibertad = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      personasPrivadasLibertad: event.currentTarget.value,
    };

    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handlePuntajePersonasPrivadasLibertad = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajePersonasPrivadasLibertad: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesPersonasPrivadasLibertad = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesPersonasPrivadasLibertad: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleConsumoDrogasFamilia = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      consumoDrogasFamilia: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeConsumoDrogasFamilia = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeConsumoDrogasFamilia: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesConsumoDrogasFamilia = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesConsumoDrogasFamilia: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };
  const handleAbandonoFamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      abandonoFamiliar: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeAbandonoFamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeAbandonoFamiliar: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesAbandonoFamiliar = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesAbandonoFamiliar: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleRelacionEmocionesCuerpo = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      relacionEmocionesCuerpo: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeRelacionEmocionesCuerpo = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeRelacionEmocionesCuerpo: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesRelacionEmocionesCuerpo = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesRelacionEmocionesCuerpo: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleResponsabilidadCuidadores = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      responsabilidadCuidadores: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeResponsabilidadCuidadores = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeResponsabilidadCuidadores: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handleObservacionesResponsabilidadCuidadores = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      observacionesResponsabilidadCuidadores: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePuntajeTotal = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      puntajeTotal: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  const handlePrioridadChange = (event) => {
    const updatedAspectoClinico = {
      ...aspectoClinico,
      prioridad: event.currentTarget.value,
    };
    setAspectoClinico(updatedAspectoClinico);
    props.setUpdatedAspectoClinico(updatedAspectoClinico);
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Aspectos Clinicos
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtaltaVulnerabilidadViolencia">Autolesiones</label>
          <select
            class="custom-select"
            id="altaVulnerabilidadViolencia"
            name="altaVulnerabilidadViolencia"
            value={aspectoClinico.ideacionAutolesiones}
            onChange={handleIdeacionLesiones}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeAltaVulnerabilidadViolencia">
            Observaciones Autolesiones
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeAltaVulnerabilidadViolencia"
            name="puntajeAltaVulnerabilidadViolencia"
            value={aspectoClinico.observacionesIdeacion}
            onChange={handleObservacionesIdeacion}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesAltaVulnerabilidadViolencia">
            Puntaje Autolesiones
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesAltaVulnerabilidadViolencia"
            name="observacionesAltaVulnerabilidadViolencia"
            value={aspectoClinico.puntajeIdeacion}
            onChange={handlePuntajeIdeacion}
          />
        </div>
        <hr />
        <br />
        <div class="form-group col-sm-6">
          <label for="txtreflexionEntorno">Persona Significativa</label>
          <select
            class="custom-select"
            id="reflexionEntorno"
            name="reflexionEntorno"
            value={aspectoClinico.personaSignificativa}
            onChange={handlePersonaSignificativa}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeReflexionEntorno">
            Puntaje Persona Significativa
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeReflexionEntorno"
            name="puntajeReflexionEntorno"
            value={aspectoClinico.puntajePersonaSignificativa}
            onChange={handlePuntajePersonaSignificativa}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Persona Significativa
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesPersonaSignificativa}
            onChange={handleObservacionesPersonaSignificativa}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtFormasRelacionarse">Formas de Relacionarse</label>
          <select
            class="custom-select"
            id="formasRelacionarse"
            name="formasRelacionarse"
            value={aspectoClinico.violenciaIntrafamiliar}
            onChange={handleViolenciaIntrafamiliar}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeFormasRelacionarse">
            Puntaje Violencia Intrafamiliar
          </label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="formasRelacionarse"
            name="formasRelacionarse"
            value={aspectoClinico.puntajeViolenciaIntrafamiliar}
            onChange={handlePuntajeViolenciaIntrafamiliar}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtObservacionesFormasRelacionarse">
            Observaciones Violencia Intrafamiliar
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesFormasRelacionarse"
            name="observacionesFormasRelacionarse"
            value={aspectoClinico.observacionesViolenciaIntrafamiliar}
            onChange={handleObservacionesViolenciaIntrafamiliar}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">Violencia Sexual</label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.violenciaSexual}
            onChange={handleViolenciaSexual}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Violencia Sexual
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeViolenciaSexual}
            onChange={handlePuntajeViolenciaSexual}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Violencia Sexual
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesViolenciaSexual}
            onChange={handleObservacionesViolenciaSexual}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">Violencia Psicologica</label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.violenciaPsicologica}
            onChange={handleViolenciaPsicologica}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Violencia Psicologica
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeViolenciaPsicologica}
            onChange={handlePuntajeViolenciaPsicologica}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Violencia Psicologica
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesViolenciaPsicologica}
            onChange={handleObservacionesViolenciaPsicologica}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">
            Violencia Fisica familiar
          </label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.violenciaFisicaFamiliar}
            onChange={handleViolenciaFisicaFamiliar}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Violencia Fisica familiar
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeViolenciaFisicaFamiliar}
            onChange={handlePuntajeViolenciaFisicaFamiliar}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Violencia Fisica Familiar
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesViolenciaFisicaFamiliar}
            onChange={handleObservacionesViolenciaFisicaFamiliar}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">
            Personas Privadas de Libertad
          </label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.personasPrivadasLibertad}
            onChange={handlePersonasPrivadasLibertad}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Personas Privadas de Libertad
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajePersonasPrivadasLibertad}
            onChange={handlePuntajePersonasPrivadasLibertad}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Personas Privadas de Libertad
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesPersonasPrivadasLibertad}
            onChange={handleObservacionesPersonasPrivadasLibertad}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">
            Consumo de Drogas en la Familia
          </label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.consumoDrogasFamilia}
            onChange={handleConsumoDrogasFamilia}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Consumo de Drogas en la Familia
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeConsumoDrogasFamilia}
            onChange={handlePuntajeConsumoDrogasFamilia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Consumo de Drogas en la Familia
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesConsumoDrogasFamilia}
            onChange={handleObservacionesConsumoDrogasFamilia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">
            Abandono Familiar o Social
          </label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.abandonoFamiliar}
            onChange={handleAbandonoFamiliar}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Abandono Familiar o Social
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeAbandonoFamiliar}
            onChange={handlePuntajeAbandonoFamiliar}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Abandono Familiar o Social
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesAbandonoFamiliar}
            onChange={handleObservacionesAbandonoFamiliar}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">
            Relacion Emociones y Cuerpo
          </label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.relacionEmocionesCuerpo}
            onChange={handleRelacionEmocionesCuerpo}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Relacion Emociones y Cuerpo
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeRelacionEmocionesCuerpo}
            onChange={handlePuntajeRelacionEmocionesCuerpo}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Relacion Emociones y Cuerpo
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesRelacionEmocionesCuerpo}
            onChange={handleObservacionesRelacionEmocionesCuerpo}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">
            Responsabilidad de los Cuidadores
          </label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.responsabilidadCuidadores}
            onChange={handleResponsabilidadCuidadores}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Responsabilidad de los Cuidadores
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeResponsabilidadCuidadores}
            onChange={handlePuntajeResponsabilidadCuidadores}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Responsabilidad de los Cuidadores
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoClinico.observacionesResponsabilidadCuidadores}
            onChange={handleObservacionesResponsabilidadCuidadores}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">Puntaje Total</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoClinico.puntajeTotal}
            onChange={handlePuntajeTotal}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">Prioridad</label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoClinico.prioridad}
            onChange={handlePrioridadChange}
          >
            <option value="null">-No especifica-</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}
