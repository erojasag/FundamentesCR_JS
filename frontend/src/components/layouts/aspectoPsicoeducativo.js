import React, { useState, useEffect } from 'react';

export default function AspectoPsicoeducativo(props) {
  const [aspectoPsicoeducativo, setAspectoPsicoeducativo] = useState({});

  useEffect(() => {
    if (props.aspectoPsicoeducativo) {
      setAspectoPsicoeducativo(props.aspectoPsicoeducativo);
    } else {
      setAspectoPsicoeducativo({
        permanencia: null,
        observacionesPermanencia: '',
        puntajePermanencia: 0,
        rezagoEducativo: null,
        observacionesRezago: '',
        puntajeRezago: 0,
        exclusionEducativa: null,
        observacionesExclusion: '',
        puntajeExclusion: 0,
        dificultades: null,
        observacionesDificultades: '',
        puntajeDificultades: 0,
        apoyoFamiliar: null,
        observacionesApoyo: '',
        puntajeApoyo: 0,
        violenciaEscolar: null,
        observacionesViolencia: '',
        puntajeViolencia: 0,
        puntajeTotal: 0,
        prioridad: null,
      });
    }
  }, [props.aspectoPsicoeducativo]);

  const handlePermanencia = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      permanencia: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handleObservacionesPermanencia = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      observacionesPermanencia: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handlePuntajePermanencia = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      puntajePermanencia: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handleRezagoEducativo = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      rezagoEducativo: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handleObservacionesRezago = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      observacionesRezago: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handlePuntajeRezago = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      puntajeRezago: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handleExclusionEducativa = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      exclusionEducativa: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handleObservacionesExclusion = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      observacionesExclusion: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handlePuntajeExclusion = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      puntajeExclusion: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handleDificultades = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      dificultades: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handleObservacionesDificultades = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      observacionesDificultades: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handlePuntajeDificultades = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      puntajeDificultades: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handleApoyoFamiliar = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      apoyoFamiliar: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handleObservacionesApoyo = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      observacionesApoyo: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handlePuntajeApoyo = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      puntajeApoyo: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handleViolenciaEscolar = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      violenciaEscolar: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handleObservacionesViolencia = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      observacionesViolencia: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handlePuntajeViolencia = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      puntajeViolencia: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  const handlePuntajeTotal = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      puntajeTotal: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };
  const handlePrioridad = (event) => {
    const updatedAspectoPsicoeducativo = {
      ...aspectoPsicoeducativo,
      prioridad: event.currentTarget.value,
    };
    setAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
    props.setUpdatedAspectoPsicoeducativo(updatedAspectoPsicoeducativo);
  };

  useEffect(() => {
    const calculateTotalPuntaje = () => {
      const sumOfPuntajes =
        parseInt(aspectoPsicoeducativo.puntajePermanencia || 0) +
        parseInt(aspectoPsicoeducativo.puntajeRezago || 0) +
        parseInt(aspectoPsicoeducativo.puntajeExclusion || 0) +
        parseInt(aspectoPsicoeducativo.puntajeDificultades || 0) +
        parseInt(aspectoPsicoeducativo.puntajeApoyo || 0) +
        parseInt(aspectoPsicoeducativo.puntajeViolencia || 0);
      setAspectoPsicoeducativo({
        ...aspectoPsicoeducativo,
        puntajeTotal: sumOfPuntajes,
      });
    };

    calculateTotalPuntaje();
  }, [
    aspectoPsicoeducativo.puntajePermanencia,
    aspectoPsicoeducativo.puntajeRezago,
    aspectoPsicoeducativo.puntajeExclusion,
    aspectoPsicoeducativo.puntajeDificultades,
    aspectoPsicoeducativo.puntajeApoyo,
    aspectoPsicoeducativo.puntajeViolencia,
  ]);

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Aspectos Psicoeducativos
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtPermanencia">Permanencia</label>
          <select
            class="custom-select"
            id="permanencia"
            name="permanencia"
            value={aspectoPsicoeducativo.permanencia}
            onChange={handlePermanencia}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesPermanencia">
            Observaciones Permanencia
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesPermanencia"
            name="observacionesPermanencia"
            value={aspectoPsicoeducativo.observacionesPermanencia}
            onChange={handleObservacionesPermanencia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesAltaVulnerabilidadViolencia">
            Puntaje Permanencia
          </label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="observacionesAltaVulnerabilidadViolencia"
            name="observacionesAltaVulnerabilidadViolencia"
            value={aspectoPsicoeducativo.puntajePermanencia}
            onChange={handlePuntajePermanencia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtRezagoEducativo">Rezago Educativo</label>
          <select
            class="custom-select"
            id="rezagoEducativo"
            name="rezagoEducativo"
            value={aspectoPsicoeducativo.rezagoEducativo}
            onChange={handleRezagoEducativo}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesPermanencia">
            Observaciones Rezago Educativo
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesPermanencia"
            name="observacionesPermanencia"
            value={aspectoPsicoeducativo.observacionesRezago}
            onChange={handleObservacionesRezago}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeRezago">Puntaje Rezago Educativo</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="puntajeRezago"
            name="puntajeRezago"
            value={aspectoPsicoeducativo.puntajeRezago}
            onChange={handlePuntajeRezago}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtExclusionEducativa">Exclusion Educativa</label>
          <select
            class="custom-select"
            id="exclusionEducativa"
            name="exclusionEducativa"
            value={aspectoPsicoeducativo.exclusionEducativa}
            onChange={handleExclusionEducativa}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtobservacionesPermanencia">
            Observaciones Exclusion Educativa
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesPermanencia"
            name="observacionesPermanencia"
            value={aspectoPsicoeducativo.observacionesExclusion}
            onChange={handleObservacionesExclusion}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeExclusion">Puntaje Exclusion Educativa</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="puntajeExclusion"
            name="puntajeExclusion"
            value={aspectoPsicoeducativo.puntajeExclusion}
            onChange={handlePuntajeExclusion}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtDificultades">Dificultades</label>
          <select
            class="custom-select"
            id="dificultades"
            name="dificultades"
            value={aspectoPsicoeducativo.dificultades}
            onChange={handleDificultades}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtObservacionesDificultades">
            Observaciones Dificultades
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesDificultades"
            name="observacionesDificultades"
            value={aspectoPsicoeducativo.observacionesDificultades}
            onChange={handleObservacionesDificultades}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeDificultades">Puntaje Dificultades</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="puntajeDificultades"
            name="puntajeDificultades"
            value={aspectoPsicoeducativo.puntajeDificultades}
            onChange={handlePuntajeDificultades}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtApoyoFamiliar">Apoyo Familiar</label>
          <select
            class="custom-select"
            id="apoyoFamiliar"
            name="apoyoFamiliar"
            value={aspectoPsicoeducativo.apoyoFamiliar}
            onChange={handleApoyoFamiliar}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtObservacionesApoyo">
            Observaciones Apoyo Familiar
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesApoyo"
            name="observacionesApoyo"
            value={aspectoPsicoeducativo.observacionesApoyo}
            onChange={handleObservacionesApoyo}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeApoyo">Puntaje Apoyo Familiar</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="puntajeApoyo"
            name="puntajeApoyo"
            value={aspectoPsicoeducativo.puntajeApoyo}
            onChange={handlePuntajeApoyo}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtViolenciaEscolar">Violencia Escolar</label>
          <select
            class="custom-select"
            id="violenciaEscolar"
            name="violenciaEscolar"
            value={aspectoPsicoeducativo.violenciaEscolar}
            onChange={handleViolenciaEscolar}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtObservacionesViolencia">
            Observaciones Violencia Escolar
          </label>
          <textarea
            type="text"
            class="form-control form-control-sm input-validar"
            id="observacionesViolencia"
            name="observacionesViolencia"
            value={aspectoPsicoeducativo.observacionesViolencia}
            onChange={handleObservacionesViolencia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeViolencia">Puntaje Violencia Escolar</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="puntajeViolencia"
            name="puntajeViolencia"
            value={aspectoPsicoeducativo.puntajeViolencia}
            onChange={handlePuntajeViolencia}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPuntajeTotal">Puntaje Total</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="puntajeTotal"
            name="puntajeTotal"
            value={aspectoPsicoeducativo.puntajeTotal}
            onChange={handlePuntajeTotal}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtPrioridad">Prioridad</label>
          <select
            class="custom-select"
            id="prioridad"
            name="prioridad"
            value={aspectoPsicoeducativo.prioridad}
            onChange={handlePrioridad}
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
