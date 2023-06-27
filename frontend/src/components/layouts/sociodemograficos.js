import React, { useState, useEffect } from 'react';

export default function Sociodemograficos(props) {
  const [sociodemograficos, setSociodemograficos] = useState({});

  useEffect(() => {
    if (props.sociodemograficos !== null) {
      setSociodemograficos(props.sociodemograficos);
    } else {
      setSociodemograficos({});
    }
  }, [props.sociodemograficos]);

  const handleTipoViviendaChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      tipoVivienda: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };
  const handleHabitantesHogarChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      habitantesHogar: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };
  const handleCantidadFamiliasChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      cantidadFamilias: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };
  const handleElectricidadChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      electricidad: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  const handleAguaPotableChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      aguaPotable: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  const handleCelularChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      celular: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  const handleInternetChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      internet: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  const handleCableChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      cable: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  const handleRecibeSubsidioChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      recibeSubsidio: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  const handleInstitucionChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      institucion: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  const handleTipoChange = (event) => {
    const updatedSociodemograficos = {
      ...sociodemograficos,
      tipo: event.currentTarget.value,
    };
    setSociodemograficos(updatedSociodemograficos);
    props.setUpdatedSociodemograficos(updatedSociodemograficos);
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Datos Sociodemograficos
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtTipoVivienda">Tipo de Vivienda</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="tipoVivienda"
            name="tipoVivienda"
            value={sociodemograficos.tipoVivienda}
            onChange={handleTipoViviendaChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtHabitantesHogar">
            Cantidad de habitantes del hogar
          </label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="habitantesHogar"
            name="habitantesHogar"
            value={sociodemograficos.habitantesHogar}
            onChange={handleHabitantesHogarChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCantidadDeFamilias">Cantidad de Familias</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="cantidadFamilias"
            name="cantidadFamilias"
            value={sociodemograficos.cantidadFamilias}
            onChange={handleCantidadFamiliasChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtElectricidad">Electricidad</label>
          <select
            class="custom-select"
            id="electricidad"
            name="electricidad"
            value={sociodemograficos.electricidad}
            onChange={handleElectricidadChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtAguaPotable">Agua Potable </label>
          <select
            class="custom-select"
            id="aguaPotable"
            name="aguaPotable"
            value={sociodemograficos.aguaPotable}
            onChange={handleAguaPotableChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCelular">Contacto</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="celular"
            name="celular"
            value={sociodemograficos.celular}
            onChange={handleCelularChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtInternet">Internet</label>
          <select
            class="custom-select"
            id="internet"
            name="internet"
            value={sociodemograficos.internet}
            onChange={handleInternetChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCable">Cable</label>
          <select
            class="custom-select"
            id="cable"
            name="cable"
            value={sociodemograficos.cable}
            onChange={handleCableChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtRecibeSubsidio">Recibe Subsidio</label>
          <select
            class="custom-select"
            id="recibeSubsidio"
            name="recibeSubsidio"
            value={sociodemograficos.recibeSubsidio}
            onChange={handleRecibeSubsidioChange}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
          {sociodemograficos.recibeSubsidio === 'true' ||
          sociodemograficos.recibeSubsidio === true ? (
            <>
              <div class="form-group col-sm-6">
                <label for="txtInstitucion">Institucion</label>
                <input
                  type="text"
                  class="form-control form-control-sm input-validar"
                  id="institucion"
                  name="institucion"
                  value={sociodemograficos.institucion}
                  onChange={handleInstitucionChange}
                />
              </div>
              <div class="form-group col-sm-6">
                <label for="txtTipo">Tipo de Subsidio</label>
                <input
                  type="text"
                  class="form-control form-control-sm input-validar"
                  id="tipo"
                  name="tipo"
                  value={sociodemograficos.tipo}
                  onChange={handleTipoChange}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
