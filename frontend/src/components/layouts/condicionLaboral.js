import React, { useState, useEffect } from 'react';

export default function CondicionLaboral(props) {
  const [condicionLaboral, setCondicionLaboral] = useState({});

  useEffect(() => {
    if (props.condicionLaboral !== null) {
      setCondicionLaboral(props.condicionLaboral);
    } else {
      setCondicionLaboral([null]);
    }
  }, [props.condicionLaboral]);

  const handleTrabajaActualmenteChange = (event) => {
    const updatedCondicionLaboral = {
      ...condicionLaboral,
      trabajaActualmente: event.currentTarget.value,
    };
    setCondicionLaboral(updatedCondicionLaboral);
    props.setUpdatedCondicionLaboral(updatedCondicionLaboral);
  };

  const handleLugarChange = (event) => {
    const updatedCondicionLaboral = {
      ...condicionLaboral,
      lugar: event.currentTarget.value,
    };
    setCondicionLaboral(updatedCondicionLaboral);
    props.setUpdatedCondicionLaboral(updatedCondicionLaboral);
  };
  const handleUltimoEmpleoChange = (event) => {
    const updatedCondicionLaboral = {
      ...condicionLaboral,
      ultimoEmpleo: event.currentTarget.value,
    };
    setCondicionLaboral(updatedCondicionLaboral);
    props.setUpdatedCondicionLaboral(updatedCondicionLaboral);
  };
  const handleMotivoAbandonoChange = (event) => {
    const updatedCondicionLaboral = {
      ...condicionLaboral,
      motivoAbandono: event.currentTarget.value,
    };
    setCondicionLaboral(updatedCondicionLaboral);
    props.setUpdatedCondicionLaboral(updatedCondicionLaboral);
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Condiciones Laborales
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtTrabajaActualmente">Trabaja Actualmente</label>
          <select
            class="custom-select"
            id="trabajaActualmente"
            name="trabajaActualmente"
            value={condicionLaboral.trabajaActualmente}
            onChange={handleTrabajaActualmenteChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtLugar">Lugar</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="lugar"
            name="lugar"
            value={condicionLaboral.lugar}
            onChange={handleLugarChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtUltimoEmpleo">Ultimo Empleo</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="ultimoEmpleo"
            name="ultimoEmpleo"
            value={condicionLaboral.ultimoEmpleo}
            onChange={handleUltimoEmpleoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtMotivoAbandono">Motivo de renuncia</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="motivoAbandono"
            name="motivoAbandono"
            value={condicionLaboral.motivoAbandono}
            onChange={handleMotivoAbandonoChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
