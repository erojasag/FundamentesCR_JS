import React, { useState, useEffect } from 'react';

export default function AspectoDesarrolloTalleres(props) {
  const [aspectoDesarrolloTalleres, setAspectoDesarrolloTalleres] = useState(
    {}
  );

  useEffect(() => {
    if (props.aspectoDesarrolloTalleres) {
      setAspectoDesarrolloTalleres(props.aspectoDesarrolloTalleres);
    } else {
      setAspectoDesarrolloTalleres({
        comparteAnecdotas: null,
        ejerciciosGrupales: null,
        dialogoRespetuoso: null,
        reflexiona: null,
        seEquivoca: null,
      });
    }
  }, [props.aspectoDesarrolloTalleres]);

  const handleComparteAnecdotas = (event) => {
    const updatedAspectoDesarolloTalleres = {
      ...aspectoDesarrolloTalleres,
      comparteAnecdotas: event.currentTarget.value,
    };
    setAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
    props.setUpdatedAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
  };

  const handleEjerciciosGrupales = (event) => {
    const updatedAspectoDesarolloTalleres = {
      ...aspectoDesarrolloTalleres,
      ejerciciosGrupales: event.currentTarget.value,
    };
    setAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
    props.setUpdatedAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
  };

  const handleDialogoRespetuoso = (event) => {
    const updatedAspectoDesarolloTalleres = {
      ...aspectoDesarrolloTalleres,
      dialogoRespetuoso: event.currentTarget.value,
    };
    setAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
    props.setUpdatedAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
  };

  const handleReflexiona = (event) => {
    const updatedAspectoDesarolloTalleres = {
      ...aspectoDesarrolloTalleres,
      reflexiona: event.currentTarget.value,
    };
    setAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
    props.setUpdatedAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
  };

  const handleSeEquivoca = (event) => {
    const updatedAspectoDesarolloTalleres = {
      ...aspectoDesarrolloTalleres,
      seEquivoca: event.currentTarget.value,
    };
    setAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
    props.setUpdatedAspectoDesarrolloTalleres(updatedAspectoDesarolloTalleres);
  };
  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Aspectos de Desarrollo de Talleres
        </label>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <label for="txtComparteAnecdotas">Comparte Anecdotas</label>
          <select
            class="custom-select"
            id="comparteAnecdotas"
            name="comparteAnecdotas"
            value={aspectoDesarrolloTalleres.comparteAnecdotas}
            onChange={handleComparteAnecdotas}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtComparteAnecdotas">
            Participa de Ejercicios Grupales
          </label>
          <select
            class="custom-select"
            id="comparteAnecdotas"
            name="comparteAnecdotas"
            value={aspectoDesarrolloTalleres.ejerciciosGrupales}
            onChange={handleEjerciciosGrupales}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtDialogoRespetuoso">Dialoga Respetuosamente</label>
          <select
            class="custom-select"
            id="dialogoRespetuoso"
            name="dialogoRespetuoso"
            value={aspectoDesarrolloTalleres.dialogoRespetuoso}
            onChange={handleDialogoRespetuoso}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtReflexiona">Reflexiona</label>
          <select
            class="custom-select"
            id="reflexiona"
            name="reflexiona"
            value={aspectoDesarrolloTalleres.reflexiona}
            onChange={handleReflexiona}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label for="txtSeEquivoca">Se equivoca</label>
          <select
            class="custom-select"
            id="seEquivoca"
            name="seEquivoca"
            value={aspectoDesarrolloTalleres.seEquivoca}
            onChange={handleSeEquivoca}
          >
            <option value="null">-No especifica-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <hr />
        <br />
      </div>
    </React.Fragment>
  );
}
