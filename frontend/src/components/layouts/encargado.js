import React, { useState, useEffect } from 'react';

export default function Encargado(props) {
  const [encargado, setEncargado] = useState({});

  useEffect(() => {
    if (props.encargado) {
      setEncargado(props.encargado);
    } else {
      setEncargado({
        parentezco: '',
        nombreCompleto: '',
        fechaNacimiento: '',
        edad: '',
        nacionalidad: '',
        cedula: '',
        contacto: '',
        escolaridad: '',
        ocupacion: '',
        condicionLaboral: '',
        consumoMedicinas: '',
        expedienteHNP: '',
        situacionParticular: '',
      });
    }
  }, [props.encargado]);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(encargado.fechaNacimiento);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setEncargado({
        ...encargado,
        edad: age,
      });
    };

    calculateAge();
  }, [encargado.fechaNacimiento]);

  const handleParentezcoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      parentezco: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleNombreCompletoEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      nombreCompleto: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleFechaNacimientoEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      fechaNacimiento: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleEdadEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      edad: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleNacionalidadEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      nacionalidad: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleCedulaEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      cedula: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleContactoEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      contacto: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleEscolaridadChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      escolaridad: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleOcupacionChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      ocupacion: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleCondicionLaboralEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      condicionLaboral: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleConsumoMedicinasChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      consumoMedicinas: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleExpedienteHNPEncargadoChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      expedienteHNP: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
  };
  const handleSituacionPartiChange = (event) => {
    const updatedEncargado = {
      ...encargado,
      situacionParticular: event.currentTarget.value,
    };
    setEncargado(updatedEncargado);
    props.setUpdatedEncargado(updatedEncargado);
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
          <label for="txtParentezco">Parentezco</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="parentezco"
            name="parentezco"
            value={encargado.parentezco}
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
            value={encargado.nombreCompleto}
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
            value={encargado.fechaNacimiento}
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
            value={encargado.edad}
            onChange={handleEdadEncargadoChange}
            disabled
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtNacionalidad">Nacionalidad</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="nacionalidadEncargado"
            name="nacionalidadEncargado"
            value={encargado.nacionalidad}
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
            value={encargado.cedula}
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
            value={encargado.contacto}
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
            value={encargado.escolaridad}
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
            value={encargado.ocupacion}
            onChange={handleOcupacionChange}
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="txtCondicionLaboral">Condicion Laboral</label>
          <select
            class="custom-select"
            id="condicionLaboralEncargado"
            name="condicionLaboralEncargado"
            value={encargado.condicionLaboral}
            onChange={handleCondicionLaboralEncargadoChange}
          >
            <option value="null">-No Especifica-</option>
            <option value="Empleado">Empleado</option>
            <option value="Independiente">Independiente</option>
            <option value="Informal">Informal</option>
            <option value="Desempleado">Desempleado</option>
            <option value="Pensionado">Pensionado</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtConsumoMedicinas">Consume Medicinas</label>
          <select
            class="custom-select"
            id="consumoMedicinas"
            name="consumoMedicinas"
            value={encargado.consumoMedicinas}
            onChange={handleConsumoMedicinasChange}
          >
            <option value="null">-No Especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtExpedienteHNP">Expediente HNP</label>
          <select
            class="custom-select"
            id="expedienteHNPEncargado"
            name="expedienteHNPEncargado"
            value={encargado.expedienteHNP}
            onChange={handleExpedienteHNPEncargadoChange}
          >
            <option value="null">-No Especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtExpedienteHNP">Situacion Particular</label>
          <input
            type="text"
            class="form-control form-control-sm input-validar"
            id="expedienteHNPEncargado"
            name="expedienteHNPEncargado"
            value={encargado.situacionParticular}
            onChange={handleSituacionPartiChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
