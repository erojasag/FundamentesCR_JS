import React, { useState, useEffect } from 'react';

export default function AspectoComunitario(props) {
  const [aspectoComunitario, setAspectoComunitario] = useState({});

  useEffect(() => {
    if (props.aspectoComunitario !== '') {
      setAspectoComunitario(props.aspectoComunitario);
    } else {
      setAspectoComunitario([null]);
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
          <label for="txtTrabajaActualmente">
            Alta Vulnerabilidad de violencia
          </label>
          <select
            class="custom-select"
            id="trabajaActualmente"
            name="trabajaActualmente"
            value={aspectoComunitario}
            onChange={handleAltaVulnerabilidadViolencia}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtLugar">Puntaje</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="lugar"
            name="lugar"
            value={aspectoComunitario}
            onChange={handlePuntajeAltaVulnerabilidadViolencia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtLugar">Observaciones</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="lugar"
            name="lugar"
            value={aspectoComunitario}
            onChange={handleObservacionesAltaVulnerabilidadViolencia}
          />
        </div>
        <hr />
        <br />
        <div class="form-group col-sm-6">
          <label for="txtTrabajaActualmente">Reflexion de Entorno</label>
          <select
            class="custom-select"
            id="trabajaActualmente"
            name="trabajaActualmente"
            value={aspectoComunitario}
            onChange={handleReflexionEntorno}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtLugar">Puntaje Reflexion de Entorno</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="lugar"
            name="lugar"
            value={aspectoComunitario}
            onChange={handlePuntajeReflexionEntorno}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtFormasRelacionarse">
            Observaciones Reflexion de Entorno
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="lugar"
            name="lugar"
            value={aspectoComunitario}
            onChange={handleObservacionesReflexionEntorno}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtFormasRelacionarse">Formas de Relacionarse</label>
          <select
            class="custom-select"
            id="formasRelacionarse"
            name="formasRelacionarse"
            value={aspectoComunitario}
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
            value={aspectoComunitario}
            onChange={handlePuntajeFormasRelacionarse}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtObservacionesFormasRelacionarse">
            Observaciones Forma de Relacionarse
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesFormasRelacionarse"
            name="observacionesFormasRelacionarse"
            value={aspectoComunitario}
            onChange={handleObservacionesFormasRelacionarse}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtFormasRelacionarse">Cuestionamiento Normas</label>
          <select
            class="custom-select"
            id="formasRelacionarse"
            name="formasRelacionarse"
            value={aspectoComunitario}
            onChange={handleFormasRelacionarse}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}
