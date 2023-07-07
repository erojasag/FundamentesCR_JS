import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AspectoComunitario from './aspectoComunitario';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function PerfilEntrada(props) {
  const navigate = useNavigate();
  const [perfilEntrada, setPerfilEntrada] = useState({});
  const [agregaPerfilEntrada, setAgregaPerfilEntrada] = useState(false);

  async function getDatosPerfilEntrada() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const response = await axios.get(
      `http://localhost:3000/entrevistasEntrada/${props.perfilEntrada.perfilEntradaId}`,
      {
        headers,
      }
    );
    setPerfilEntrada(response.data.data.data);
  }

  useEffect(() => {
    if (props.perfilEntrada.perfilEntradaId) {
      getDatosPerfilEntrada(perfilEntrada.perfilEntradaId);
    } else {
      setPerfilEntrada({
        doctorId: '',
        aspectoComunitarioId: '',
        aspectoClinicoId: '',
        aspectoPsicoeducativoId: '',
        aspectoDesarrolloId: '',
      });
      console.log(perfilEntrada);
    }
  }, []);

  return (
    <React.Fragment>
      {perfilEntrada ? (
        <>
          <div class="form-group row justify-content-center">
            <label for="txtDistrito" className="col-form-label-lg">
              Perfil de Entrada
            </label>
          </div>

          <div class="row">
            <div class="form-group col-sm-6">
              <label for="txtPrivadoLibertad">Privado de Libertad?</label>
              <select
                class="custom-select"
                id="privLibertad"
                name="privLibertad"
                // value={}
                // onChange={}
              >
                <option value="null">-No Especifica-</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
            <div class="form-group col-sm-6">
              <label for="txtViolenciaMujer">Violencia contra mujeres?</label>
              <select
                class="custom-select"
                id="violenciaMujer"
                name="violenciaMujer"
                // value={}
                // onChange={}
              >
                <option value="null">-No Especifica-</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
            <div class="form-group col-sm-6">
              <label for="txtViolenciaFamiliar">Violencia Familiar</label>
              <select
                class="custom-select"
                id="violenciaFami"
                name="violenciaFami"
                // value={}
                // onChange={}
              >
                <option value="null">-No Especifica-</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
            <div class="form-group col-sm-6">
              <label for="txtAcontecimientoRelev">
                Acontecimientos Relevantes
              </label>
              <input
                type="text"
                class="form-control form-control-sm input-validar"
                id="acontecimientoRelev"
                name="acontecimientoRelev"
                // value={}
                // onChange={}
              />
            </div>
          </div>
        </>
      ) : (
        <div class="row col-sm-6">
          <button
            class="btn btn-success btn-sm"
            type="button"
            id="btnGuardarCambios"
            onClick={() => setAgregaPerfilEntrada(true)}
          >
            Anadir Perfil de Entrada
          </button>
        </div>
      )}
      {agregaPerfilEntrada && (
        <>
          <div class="form-group row justify-content-center">
            <label for="txtDistrito" className="col-form-label-lg">
              Perfil de Entrada
            </label>
          </div>

          <div class="row">
            <div class="form-group col-sm-6">
              <label for="txtPrivadoLibertad">Privado de Libertad?</label>
              <select
                class="custom-select"
                id="privLibertad"
                name="privLibertad"
                // value={}
                // onChange={}
              >
                <option value="null">-No Especifica-</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
            <div class="form-group col-sm-6">
              <label for="txtViolenciaMujer">Violencia contra mujeres?</label>
              <select
                class="custom-select"
                id="violenciaMujer"
                name="violenciaMujer"
                // value={}
                // onChange={}
              >
                <option value="null">-No Especifica-</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
            <div class="form-group col-sm-6">
              <label for="txtViolenciaFamiliar">Violencia Familiar</label>
              <select
                class="custom-select"
                id="violenciaFami"
                name="violenciaFami"
                // value={}
                // onChange={}
              >
                <option value="null">-No Especifica-</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
            <div class="form-group col-sm-6">
              <label for="txtAcontecimientoRelev">
                Acontecimientos Relevantes
              </label>
              <input
                type="text"
                class="form-control form-control-sm input-validar"
                id="acontecimientoRelev"
                name="acontecimientoRelev"
                // value={}
                // onChange={}
              />
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}
