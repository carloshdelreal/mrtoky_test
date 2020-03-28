import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => (
  <div className="container navigator">
    <div className="row">
      <div className="col-4">
        <Link to="/">
          Participantes
        </Link>
      </div>
      <div className="col-4">
        <Link to="matches">
          Matches
        </Link>
      </div>
      <div className="col-4">
        <Link to="goals">
          Goles
        </Link>
      </div>
      <div className="col-4">
        <Link to="goleador">
          Goleador
        </Link>
      </div>
      <div className="col-4">
        <Link to="tabla">
          Tabla de Posiciones
        </Link>
      </div>
      <div className="col-4">
        <Link to="resultados">
          Partidos y Resultados
        </Link>
      </div>
    </div>
  </div>
);

export default Navigator;
