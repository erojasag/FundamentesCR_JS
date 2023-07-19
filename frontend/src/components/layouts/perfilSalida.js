import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AspectoComunitario from './aspectoComunitario';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function PerfilSalida(props) {
  const navigate = useNavigate();
  const [perfilSalida, setPerfilSalida] = useState({});

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
      `${process.env.REACT_APP_BACKEND_API}entrevistasEntrada/${props.perfilSalida.perfilSalidaIds}`,
      {
        headers,
      }
    );
    setPerfilSalida(response.data.data.data);
  }

  useEffect(() => {
    if (!props.perfilSalida) {
      setPerfilSalida({
        doctorId: null,
        aspectoComunitarioId: null,
        aspectoClinicoId: null,
        aspectoPsicoeducativoId: null,
        aspectoDesarrolloId: null,
      });
    } else {
      getDatosPerfilEntrada(perfilSalida.perfilSalidaId);
    }
  }, []);

  return (
    <React.Fragment>
      <AspectoComunitario
        aspectoComunitario={aspectoComunitario}
        setUpdatedAspectoComunitario={setUpdatedAspectoComunitario}
      />
    </React.Fragment>
  );
}
