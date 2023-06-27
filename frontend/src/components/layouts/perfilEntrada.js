import React, { useState, useEffect } from 'react';
import AspectoComunitario from './aspectoComunitario';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function PerfilEntrada(props) {
  const [perfilEntrada, setPerfilEntrada] = useState(props.perfilEntrada);

  const [aspectoComunitario, setAspectoComunitario] = useState({});
  const [aspectoClinico, setAspectoClinico] = useState({});
  const [aspectoDesarrolloTaller, setAspectoDesarrolloTaller] = useState({});
  const [aspectoPsicoeducativo, setAspectoPsicoeducativo] = useState({});

  console.log(perfilEntrada);

  async function getDatosPerfilEntrada(id) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    };
    const responseDatosComunitarios = await axios.get(
      `http://localhost:3000/entrevistasEntrada/${id}`,
      {
        headers,
      }
    );
    setPerfilEntrada(responseDatosComunitarios.data.data.data);
  }

  useEffect(() => {
    getDatosPerfilEntrada(perfilEntrada.perfilEntradaId);
  }, []);

  return (
    <React.Fragment>
      <AspectoComunitario aspectoComunitario={aspectoComunitario} />
    </React.Fragment>
  );
}
