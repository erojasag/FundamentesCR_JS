import React, { useState, useEffect } from 'react';

export default function AspectoComunitario(props) {
  const [aspectoComunitario, setAspectoComunitario] = useState({});

  useEffect(() => {
    if (props.aspectoComunitario.lenght === 0) {
      setAspectoComunitario({
        altaVulnerabilidadViolencia: null,
        puntajeAltaVulnerabilidadViolencia: 0,
        observacionesAltaVulnerabilidadViolencia: '',
        reflexionEntorno: null,
        puntajeReflexionEntorno: 0,
        observacionesReflexionEntorno: '',
        formasRelacionarse: null,
        puntajeFormasRelacionarse: 0,
        observacionesFormasRelacionarse: '',
        cuestionamientoNormas: null,
        puntajeCuestionamientoNormas: 0,
        observacionesCuestionamientoNormas: '',
        puntajeTotal: 0,
        prioridad: '',
      });
    } else {
      setAspectoComunitario(props.aspectoComunitario);
    }
  }, [props.aspectoComunitario]);

  const handleAltaVulnerabilidadViolencia = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      altaVulnerabilidadViolencia: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handlePuntajeAltaVulnerabilidadViolencia = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      puntajeAltaVulnerabilidadViolencia: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handleObservacionesAltaVulnerabilidadViolencia = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      observacionesAltaVulnerabilidadViolencia: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handleReflexionEntorno = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      reflexionEntorno: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handlePuntajeReflexionEntorno = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      puntajeReflexionEntorno: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handleObservacionesReflexionEntorno = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      observacionesReflexionEntorno: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handleFormasRelacionarse = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      formasRelacionarse: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handlePuntajeFormasRelacionarse = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      puntajeFormasRelacionarse: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handleObservacionesFormasRelacionarse = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      observacionesFormasRelacionarse: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handleCuestionamientoNormas = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      cuestionamientoNormas: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handlePuntajeCuestionamientoNormas = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      puntajeCuestionamientoNormas: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handleObservacionesCuestionamientoNormas = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      observacionesCuestionamientoNormas: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handlePrioridadChange = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      prioridad: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  const handlePuntajeTotal = (event) => {
    const updatedAspectoComunitario = {
      ...aspectoComunitario,
      puntajeTotal: event.currentTarget.value,
    };
    setAspectoComunitario(updatedAspectoComunitario);
    props.setUpdatedAspectoComunitario(updatedAspectoComunitario);
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Aspectos Comunitarios
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtaltaVulnerabilidadViolencia">
            Alta Vulnerabilidad de violencia
          </label>
          <select
            class="custom-select"
            id="altaVulnerabilidadViolencia"
            name="altaVulnerabilidadViolencia"
            value={aspectoComunitario.altaVulnerabilidadViolencia}
            onChange={handleAltaVulnerabilidadViolencia}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeAltaVulnerabilidadViolencia">
            Puntaje de alta Vulnerabilidad de Violencia
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeAltaVulnerabilidadViolencia"
            name="puntajeAltaVulnerabilidadViolencia"
            value={aspectoComunitario.puntajeAltaVulnerabilidadViolencia}
            onChange={handlePuntajeAltaVulnerabilidadViolencia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesAltaVulnerabilidadViolencia">
            Observaciones
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesAltaVulnerabilidadViolencia"
            name="observacionesAltaVulnerabilidadViolencia"
            value={aspectoComunitario.observacionesAltaVulnerabilidadViolencia}
            onChange={handleObservacionesAltaVulnerabilidadViolencia}
          />
        </div>
        <hr />
        <br />
        <div class="form-group col-sm-6">
          <label for="txtreflexionEntorno">Reflexion de Entorno</label>
          <select
            class="custom-select"
            id="reflexionEntorno"
            name="reflexionEntorno"
            value={aspectoComunitario.reflexionEntorno}
            onChange={handleReflexionEntorno}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeReflexionEntorno">
            Puntaje Reflexion de Entorno
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeReflexionEntorno"
            name="puntajeReflexionEntorno"
            value={aspectoComunitario.puntajeReflexionEntorno}
            onChange={handlePuntajeReflexionEntorno}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Reflexion de Entorno
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoComunitario.observacionesReflexionEntorno}
            onChange={handleObservacionesReflexionEntorno}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtFormasRelacionarse">Formas de Relacionarse</label>
          <select
            class="custom-select"
            id="formasRelacionarse"
            name="formasRelacionarse"
            value={aspectoComunitario.formasRelacionarse}
            onChange={handleFormasRelacionarse}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeFormasRelacionarse">
            Puntaje Formas de relacionarse
          </label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="formasRelacionarse"
            name="formasRelacionarse"
            value={aspectoComunitario.puntajeFormasRelacionarse}
            onChange={handlePuntajeFormasRelacionarse}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtObservacionesFormasRelacionarse">
            Observaciones Forma de Relacionarse
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesFormasRelacionarse"
            name="observacionesFormasRelacionarse"
            value={aspectoComunitario.observacionesFormasRelacionarse}
            onChange={handleObservacionesFormasRelacionarse}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">Cuestionamiento Normas</label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoComunitario.cuestionamientoNormas}
            onChange={handleCuestionamientoNormas}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">
            Puntaje Cuestionamiento de Normas
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoComunitario.puntajeCuestionamientoNormas}
            onChange={handlePuntajeCuestionamientoNormas}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesReflexionEntorno">
            Observaciones Cuestionamiento de Normas
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesReflexionEntorno"
            name="observacionesReflexionEntorno"
            value={aspectoComunitario.observacionesCuestionamientoNormas}
            onChange={handleObservacionesCuestionamientoNormas}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtpuntajeCuestionamientoNormas">Puntaje Total</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="puntajeCuestionamientoNormas"
            name="puntajeCuestionamientoNormas"
            value={aspectoComunitario.puntajeTotal}
            onChange={handlePuntajeTotal}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtcuestionamientoNormas">Prioridad</label>
          <select
            class="custom-select"
            id="cuestionamientoNormas"
            name="cuestionamientoNormas"
            value={aspectoComunitario.prioridad}
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
