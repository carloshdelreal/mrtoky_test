import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => (
  <div className="container navigator">
    <div className="row">
      <div className="col-4">
        <Link to="/" activeStyle={{ color: 'red' }}>
          Participantes
        </Link>
      </div>
      <div className="col-4">
        <Link to="matches" activeStyle={{ color: 'red' }}>
          Matches
        </Link>
      </div>
      <div className="col-4">
        <Link to="goals" activeStyle={{ color: 'red' }}>
          Goles
        </Link>
      </div>
      <div className="col-4">
        <Link to="goleador" activeStyle={{ color: 'red' }}>
          Goleador
        </Link>
      </div>
      <div className="col-4">
        <Link to="tabla" activeStyle={{ color: 'red' }}>
          Tabla de Posiciones
        </Link>
      </div>
      <div className="col-4">
        <Link to="resultados" activeStyle={{ color: 'red' }}>
          Partidos y Resultados
        </Link>
      </div>
    </div>
  </div>
);

export default Navigator;
