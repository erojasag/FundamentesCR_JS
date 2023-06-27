import React, { useState, useEffect } from 'react';

export default function Sociodemograficos(props) {
  const { sociodemograficos } = props;
  
  const [tipoVivienda, setTipoVivienda] = useState('');
  const [habitantesHogar, setHabitantesHogar] = useState('');
  const [cantidadFamilias, setCantidadFamilias] = useState(1);
  const [electricidad, setElectricidad] = useState(null);
  const [aguaPotable, setAguaPotable] = useState(null);
  const [celular, setCelular] = useState(0);
  const [internet, setInternet] = useState(null);
  const [cable, setCable] = useState(null);
  const [recibeSubsidio, setRecibeSubsidio] = useState(null);
  const [institucion, setInstitucion] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    if (sociodemograficos !== '') {

      setTipoVivienda(sociodemograficos.tipoVivienda);
      setHabitantesHogar(sociodemograficos.habitantesHogar);
      setCantidadFamilias(sociodemograficos.cantidadFamilias);
      setElectricidad(sociodemograficos.electricidad);
      setAguaPotable(sociodemograficos.aguaPotable);
      setCelular(sociodemograficos.celular);
      setInternet(sociodemograficos.internet);
      setCable(sociodemograficos.cable);
      setRecibeSubsidio(sociodemograficos.recibeSubsidio);
      setInstitucion(sociodemograficos.institucion);
      setTipo(sociodemograficos.tipo);
    } else {
      setTipoVivienda('');
      setHabitantesHogar('');
      setCantidadFamilias('');
      setElectricidad(null);
      setAguaPotable(null);
      setCelular('');
      setInternet(null);
      setCable(null);
      setRecibeSubsidio(null);
      setInstitucion('');
      setTipo('');
    }
  }, [sociodemograficos]);

  const handleTipoViviendaChange = (event) => {
    setTipoVivienda(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      tipoVivienda: event.currentTarget.value,
    });
  };
  const handleHabitantesHogarChange = (event) => {
    setHabitantesHogar(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      habitantesHogar: event.currentTarget.value,
    });
  };
  const handleCantidadFamiliasChange = (event) => {
    setCantidadFamilias(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      cantidadFamilias: event.currentTarget.value,
    });
  };
  const handleElectricidadChange = (event) => {
    setElectricidad(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      electricidad: event.currentTarget.value,
    });
  };

  const handleAguaPotableChange = (event) => {
    setAguaPotable(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      aguaPotable: event.currentTarget.value,
    });
  };

  const handleCelularChange = (event) => {
    setCelular(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      celular: event.currentTarget.value,
    });
  };

  const handleInternetChange = (event) => {
    setInternet(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      internet: event.currentTarget.value,
    });
  };

  const handleCableChange = (event) => {
    setCable(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      cable: event.currentTarget.value,
    });
  };

  const handleRecibeSubsidioChange = (event) => {
    const value = event.currentTarget.value === 'true';
    setRecibeSubsidio(value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      recibeSubsidio: value,
    });
  };

  const handleInstitucionChange = (event) => {
    setInstitucion(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      institucion: event.currentTarget.value,
    });
  };

  const handleTipoChange = (event) => {
    setTipo(event.currentTarget.value);
    props.setUpdatedSociodemograficos({
      ...props.sociodemograficos,
      tipo: event.currentTarget.value,
    });
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
            value={tipoVivienda}
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
            value={habitantesHogar}
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
            value={cantidadFamilias}
            onChange={handleCantidadFamiliasChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtElectricidad">Electricidad</label>
          <select
            class="custom-select"
            id="electricidad"
            name="electricidad"
            value={electricidad}
            onChange={handleElectricidadChange}
          >
            <option value="true">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtAguaPotable">Agua Potable </label>
          <select
            class="custom-select"
            id="aguaPotable"
            name="aguaPotable"
            value={aguaPotable}
            onChange={handleAguaPotableChange}
          >
            <option value="true">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCelular">Contacto</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="celular"
            name="celular"
            value={celular}
            onChange={handleCelularChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtInternet">Internet</label>
          <select
            class="custom-select"
            id="internet"
            name="internet"
            value={internet}
            onChange={handleInternetChange}
          >
            <option value="true">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCable">Cable</label>
          <select
            class="custom-select"
            id="cable"
            name="cable"
            value={cable}
            onChange={handleCableChange}
          >
            <option value="true">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtRecibeSubsidio">Recibe Subsidio</label>
          <select
            class="custom-select"
            id="recibeSubsidio"
            name="recibeSubsidio"
            value={recibeSubsidio}
            onChange={handleRecibeSubsidioChange}
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
          {recibeSubsidio === true ? (
            <>
            
              <div class="form-group col-sm-6">
                <label for="txtInstitucion">Institucion</label>
                <input
                  type="text"
                  class="form-control form-control-sm input-validar"
                  id="institucion"
                  name="institucion"
                  value={institucion}
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
                  value={tipo}
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
