import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AspectoComunitario from './aspectoComunitario';
import Cookies from 'js-cookie';
import axios from 'axios';
import AspectoClinico from './aspectoClinico';
import AspectoPsicoeducativo from './aspectoPsicoeducativo';

export default function PerfilEntrada(props) {
  const navigate = useNavigate();
  const [perfilEntrada, setPerfilEntrada] = useState({});

  const [aspectoComunitario, setAspectoComunitario] = useState({});
  const [aspectoClinico, setAspectoClinico] = useState({});
  const [aspectoPsicoeducativo, setAspectoPsicoeducativo] = useState({});
  const [aspectoDesarrolloTalleres, setAspectoDesarrolloTalleres] = useState(
    {}
  );
  const [updatedAspectoComunitario, setUpdatedAspectoComunitario] = useState(
    {}
  );
  const [updatedAspectoClinico, setUpdatedAspectoClinico] = useState({});
  const [updatedAspectoPsicoeducativo, setUpdatedAspectoPsicoeducativo] =
    useState({});
  const [
    updatedAspectoDesarrolloTalleres,
    setUpdatedAspectoDesarrolloTalleres,
  ] = useState({});

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

    console.log(response);
    setPerfilEntrada(response.data.data.data);
    setAspectoComunitario(response.data.data.data.aspectoComunitario);
    setAspectoClinico(response.data.data.data.aspectoClinico);
    setAspectoPsicoeducativo(response.data.data.data.aspectoPsicoeducativo);
    setAspectoDesarrolloTalleres(
      response.data.data.data.aspectoDesarrolloTalleres
    );
  }

  useEffect(() => {
    if (!props.perfilEntrada) {
      setPerfilEntrada({
        doctorId: null,
        aspectoComunitarioId: null,
        aspectoClinicoId: null,
        aspectoPsicoeducativoId: null,
        aspectoDesarrolloId: null,
      });
    } else {
      getDatosPerfilEntrada(props.perfilEntrada);
      console.log(perfilEntrada);
    }
  }, []);

  return (
    <React.Fragment>
      <div class="form-group row justify-content-center">
        <label for="txtDistrito" className="col-form-label-lg">
          Perfil de Entrada
        </label>
      </div>
      <hr />
      <AspectoComunitario
        aspectoComunitario={aspectoComunitario}
        setUpdatedAspectoComunitario={setUpdatedAspectoComunitario}
      />
      <AspectoClinico
        aspectoClinico={aspectoClinico}
        setUpdatedAspectoClinico={setUpdatedAspectoClinico}
      />
      <AspectoPsicoeducativo
        aspectoPsicoeducativo={aspectoPsicoeducativo}
        setUpdatedAspectoPsicoeducativo={setUpdatedAspectoPsicoeducativo}
      />
    </React.Fragment>
  );
}
