import React, { useState, useEffect } from 'react';

export default function DinamicaFamiliar(props) {
  const { dinamicaFamiliar } = props;
  const [privLibertad, setPrivLibertad] = useState('');
  const [violenciaMujer, setViolenciaMujer] = useState('');
  const [violenciaFami, setViolenciaFami] = useState('');
  const [acontecimientoRelev, setAcontecimientoRelev] = useState('');

  useEffect(() => {
    if (dinamicaFamiliar !== '') {
      setPrivLibertad(dinamicaFamiliar.privLibertad);
      setViolenciaMujer(dinamicaFamiliar.violenciaMujer);
      setViolenciaFami(dinamicaFamiliar.violenciaFami);
      setAcontecimientoRelev(dinamicaFamiliar.acontecimientoRelev);
    } else {
      setPrivLibertad('');
      setViolenciaMujer('');
      setViolenciaFami('');
      setAcontecimientoRelev('');
    }
  }, [dinamicaFamiliar]);

  const handlePrivLibertadChange = (event) => {
    setPrivLibertad(event.currentTarget.value);
    props.setUpdatedDinamicaFamiliar({
      ...props.dinamicaFamiliar,
      privLibertad: event.currentTarget.value,
    });
  };

  const handleViolenciaMujerChange = (event) => {
    setViolenciaMujer(event.currentTarget.value);
    props.setUpdatedDinamicaFamiliar({
      ...props.dinamicaFamiliar,
      violenciaMujer: event.currentTarget.value,
    });
  };

  const handleViolenciaFamiChange = (event) => {
    setViolenciaFami(event.currentTarget.value);
    props.setUpdatedDinamicaFamiliar({
      ...props.dinamicaFamiliar,
      violenciaFami: event.currentTarget.value,
    });
  };

  const handleAcontecimientoRelevChange = (event) => {
    setAcontecimientoRelev(event.currentTarget.value);
    props.setUpdatedDinamicaFamiliar({
      ...props.dinamicaFamiliar,
      acontecimientoRelev: event.currentTarget.value,
    });
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Dinamica Familiar
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtTrabajaActualmente">Privado de Libertad?</label>
          <select
            class="custom-select"
            id="privLibertad"
            name="privLibertad"
            value={privLibertad}
            onChange={handlePrivLibertadChange}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtViolenciaMujer">Violencia contra mujeres?</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="violenciaMujer"
            name="violenciaMujer"
            value={violenciaMujer}
            onChange={handleViolenciaMujerChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtViolenciaFamiliar">Violencia Familiar</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="violenciaFami"
            name="violenciaFami"
            value={violenciaFami}
            onChange={handleViolenciaFamiChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtAcontecimientoRelev">Acontecimientos Relevantes</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="acontecimientoRelev"
            name="acontecimientoRelev"
            value={acontecimientoRelev}
            onChange={handleAcontecimientoRelevChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
