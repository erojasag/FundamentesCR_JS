import React, { useState, useEffect } from 'react';

export default function CondicionLaboral(props) {
  const { condicionLaboral } = props;
  const [trabajaActualmente, setTrabajaActualmente] = useState(null);
  const [lugar, setLugar] = useState('');
  const [ultimoEmpleo, setUltimoEmpleo] = useState('');
  const [motivoAbandono, setMotivoAbandono] = useState('');
  useEffect(() => {
    if (condicionLaboral !== '') {
      setTrabajaActualmente(condicionLaboral.trabajaActualmente);
      setLugar(condicionLaboral.lugar);
      setUltimoEmpleo(condicionLaboral.ultimoEmpleo);
      setMotivoAbandono(condicionLaboral.motivoAbandono);
    } else {
      setTrabajaActualmente(null);
      setLugar('');
      setUltimoEmpleo('');
      setMotivoAbandono('');
    }
  }, [condicionLaboral]);

  const handleTrabajaActualmenteChange = (event) => {
    setTrabajaActualmente(event.currentTarget.value);
    props.setUpdatedCondicionLaboral({
      ...props.condicionLaboral,
      trabajaActualmente: event.currentTarget.value,
    });
  };

  const handleLugarChange = (event) => {
    setLugar(event.currentTarget.value);
    props.setUpdatedCondicionLaboral({
      ...props.condicionLaboral,
      lugar: event.currentTarget.value,
    });
  };
  const handleUltimoEmpleoChange = (event) => {
    setUltimoEmpleo(event.currentTarget.value);
    props.setUpdatedCondicionLaboral({
      ...props.condicionLaboral,
      ultimoEmpleo: event.currentTarget.value,
    });
  };
  const handleMotivoAbandonoChange = (event) => {
    setMotivoAbandono(event.currentTarget.value);
    props.setUpdatedCondicionLaboral({
      ...props.condicionLaboral,
      motivoAbandono: event.currentTarget.value,
    });
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
            value={trabajaActualmente}
            onChange={handleTrabajaActualmenteChange}
          >
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
            value={lugar}
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
            value={ultimoEmpleo}
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
            value={motivoAbandono}
            onChange={handleMotivoAbandonoChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
