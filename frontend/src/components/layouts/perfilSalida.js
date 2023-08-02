import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AspectoComunitario from './aspectoComunitario';
import AspectoClinico from './aspectoClinico';
import AspectoDesarrolloTalleres from './aspectoDesarrolloTalleres';
import AspectoPsicoeducativo from './aspectoPsicoeducativo';
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

  async function getDatosPerfilSalida() {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}entrevistasEntrada/${props.perfilSalida.perfilSalidaId}`,
        {
          headers,
        }
      );
      setPerfilSalida(response.data.data.data);
    } catch (err) {
      console.log(err);
      perfilSalida.perfilSalidaId = null;
    }
  }
  useEffect(() => {
    const updatedPerfilSalidaData = {
      aspectoComunitario: updatedAspectoComunitario,
      aspectoClinico: updatedAspectoClinico,
      aspectoPsicoeducativo: updatedAspectoPsicoeducativo,
      aspectoDesarrolloTalleres: updatedAspectoDesarrolloTalleres,
    };

    // Call the callback function from the props with the updated data
    props.setUpdatedPerfilSalida(updatedPerfilSalidaData);
  }, [
    updatedAspectoComunitario,
    updatedAspectoClinico,
    updatedAspectoPsicoeducativo,
    updatedAspectoDesarrolloTalleres,
  ]);

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
      getDatosPerfilSalida(perfilSalida.perfilSalidaId);
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

      <hr />
      <AspectoClinico
        aspectoClinico={aspectoClinico}
        setUpdatedAspectoClinico={setUpdatedAspectoClinico}
      />

      <hr />
      <AspectoPsicoeducativo
        aspectoPsicoeducativo={aspectoPsicoeducativo}
        setUpdatedAspectoPsicoeducativo={setUpdatedAspectoPsicoeducativo}
      />

      <hr />
      <AspectoDesarrolloTalleres
        aspectoDesarrolloTalleres={aspectoDesarrolloTalleres}
        setUpdatedAspectoDesarrolloTalleres={
          setUpdatedAspectoDesarrolloTalleres
        }
      />
    </React.Fragment>
  );
}
