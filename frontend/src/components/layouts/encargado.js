import React, { useState, useEffect } from 'react';

export default function Encargado(props) {
  const { encargado } = props;
  const [parentezco, setParentezco] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [edad, setEdad] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [cedula, setCedula] = useState('');
  const [contacto, setContacto] = useState('');
  const [escolaridad, setEscolaridad] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [condicionLaboral, setCondicionLaboral] = useState('');
  const [consumoMedicinas, setConsumoMedicinas] = useState('');
  const [expedienteHNP, setExpedienteHNP] = useState('');

  useEffect(() => {
    console.log(encargado);
    if (encargado !== '') {
      setParentezco(encargado.parentezco);
      setNombreCompleto(encargado.nombreCompleto);
      setFechaNacimiento(encargado.fechaNacimiento);
      setEdad(encargado.edad);
      setNacionalidad(encargado.nacionalidad);
      setCedula(encargado.cedula);
      setContacto(encargado.contacto);
      setEscolaridad(encargado.escolaridad);
      setOcupacion(encargado.ocupacion);
      setCondicionLaboral(encargado.condicionLaboral);
      setConsumoMedicinas(encargado.consumoMedicinas);
      setExpedienteHNP(encargado.expedienteHNP);
    } else {
      setParentezco();
      setNombreCompleto();
      setFechaNacimiento();
      setNacionalidad();
      setCedula();
      setContacto();
      setEscolaridad();
      setOcupacion();
      setCondicionLaboral();
    }
  }, [encargado]);
  const handleParentezcoChange = (event) => {
    setParentezco(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      parentezco: event.currentTarget.value,
    });
  };
  const handleNombreCompletoEncargadoChange = (event) => {
    setNombreCompleto(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      nombreCompleto: event.currentTarget.value,
    });
  };
  const handleFechaNacimientoEncargadoChange = (event) => {
    setFechaNacimiento(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      fechaNacimiento: event.currentTarget.value,
    });
  };
  const handleEdadEncargadoChange = (event) => {
    setEdad(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      edad: event.currentTarget.value,
    });
  };
  const handleNacionalidadEncargadoChange = (event) => {
    setNacionalidad(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      nacionalidad: event.currentTarget.value,
    });
  };
  const handleCedulaEncargadoChange = (event) => {
    setCedula(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      cedula: event.currentTarget.value,
    });
  };
  const handleContactoEncargadoChange = (event) => {
    setContacto(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      contacto: event.currentTarget.value,
    });
  };
  const handleEscolaridadChange = (event) => {
    setEscolaridad(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      escolaridad: event.currentTarget.value,
    });
  };
  const handleOcupacionChange = (event) => {
    setOcupacion(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      ocupacion: event.currentTarget.value,
    });
  };
  const handleCondicionLaboralEncargadoChange = (event) => {
    setCondicionLaboral(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      condicionLaboralEncargado: event.currentTarget.value,
    });
  };
  const handleConsumoMedicinasChange = (event) => {
    setConsumoMedicinas(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      consumoMedicinas: event.currentTarget.value,
    });
  };
  const handleExpedienteHNPEncargadoChange = (event) => {
    setExpedienteHNP(event.currentTarget.value);
    props.setUpdatedEncargado({
      ...props.encargado,
      expedienteHNP: event.currentTarget.value,
    });
  };

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Datos del Encargado
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtLugar">Parentezco</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="parentezco"
            name="parentezco"
            value={parentezco}
            onChange={handleParentezcoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtNombreCompleto">Nombre</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="nombreCompletoEncargado"
            name="nombreCompletoEncargado"
            value={nombreCompleto}
            onChange={handleNombreCompletoEncargadoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtFechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            class="form-control form-control-sm input-validar"
            id="ultimoEmpleo"
            name="ultimoEmpleo"
            value={fechaNacimiento}
            onChange={handleFechaNacimientoEncargadoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtEdad">Edad</label>
          <input
            type="number"
            class="form-control form-control-sm input-validar"
            id="edadEncargado"
            name="edadEncargado"
            value={edad}
            onChange={handleEdadEncargadoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtNacionalidad">Nacionalidad</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="nacionalidadEncargado"
            name="nacionalidadEncargado"
            value={nacionalidad}
            onChange={handleNacionalidadEncargadoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCedula">Cedula</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="cedulaEncargado"
            name="cedulaEncargado"
            value={cedula}
            onChange={handleCedulaEncargadoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtContacto">Telefono</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="contactoEncargado"
            name="contactoEncargado"
            value={contacto}
            onChange={handleContactoEncargadoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtEscolaridad">Escolaridad</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="escolaridad"
            name="escolaridad"
            value={escolaridad}
            onChange={handleEscolaridadChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtOcupacion">Ocupacion</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="ocupacion"
            name="ocupacion"
            value={ocupacion}
            onChange={handleOcupacionChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCondicionLaboral">Condicion Laboral</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="condicionLaboralEncargado"
            name="condicionLaboralEncargado"
            value={condicionLaboral}
            onChange={handleCondicionLaboralEncargadoChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtConsumoMedicinas">Consume Medicinas</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="consumoMedicinas"
            name="consumoMedicinas"
            value={consumoMedicinas}
            onChange={handleConsumoMedicinasChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtExpedienteHNP">Expediente HNP</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="expedienteHNPEncargado"
            name="expedienteHNPEncargado"
            value={expedienteHNP}
            onChange={handleExpedienteHNPEncargadoChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
