import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AspectoComunitario from './aspectoComunitario';
import Cookies from 'js-cookie';
import axios from 'axios';
import AspectoClinico from './aspectoClinico';
import AspectoPsicoeducativo from './aspectoPsicoeducativo';
import AspectoDesarrolloTalleres from './aspectoDesarrolloTalleres';

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
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}entrevistasEntrada/${props.perfilEntrada.perfilEntradaId}`,
        {
          headers,
        }
      );

      setPerfilEntrada(response.data.data.data);
      setAspectoComunitario(response.data.data.data.aspectoComunitario);
      setAspectoClinico(response.data.data.data.aspectoClinico);
      setAspectoPsicoeducativo(response.data.data.data.aspectoPsicoeducativo);
      setAspectoDesarrolloTalleres(
        response.data.data.data.aspectoDesarrolloTaller
      );
    } catch (error) {
      perfilEntrada.perfilEntradaId = null;
    }
  }

  useEffect(() => {
    const updatedPerfilEntradaData = {
      aspectoComunitario: updatedAspectoComunitario,
      aspectoClinico: updatedAspectoClinico,
      aspectoPsicoeducativo: updatedAspectoPsicoeducativo,
      aspectoDesarrolloTalleres: updatedAspectoDesarrolloTalleres,
    };

    // Call the callback function from the props with the updated data
    props.setUpdatedPerfilEntrada(updatedPerfilEntradaData);
  }, [
    updatedAspectoComunitario,
    updatedAspectoClinico,
    updatedAspectoPsicoeducativo,
    updatedAspectoDesarrolloTalleres,
  ]);

  // Call the submit function from props (provided by the parent component)

  useEffect(() => {
    
    if (props.perfilEntrada === '') {
      setPerfilEntrada({
        doctorId: null,
        aspectoComunitarioId: null,
        aspectoClinicoId: null,
        aspectoPsicoeducativoId: null,
        aspectoDesarrolloId: null,
      });
    } else {
      getDatosPerfilEntrada(props.perfilEntrada);
    }
  }, [props.perfilEntrada]);

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
