import React from 'react';
import mrTokiLogo from '../images/mrtoki_logo.png';
import Teams from './teams';


const Home = () => (
  <div>
    <nav className="navbar navbar-light">
      <div className="navbar-brand">
        <img src={mrTokiLogo} width="55" className="d-inline-block align-top" alt="" />
        <div>Prueba de Ingreso</div>
      </div>
      <a className="logout" rel="nofollow" data-method="delete" href="/users/sign_out">Log Out</a>
    </nav>
    <Teams />
  </div>
);

export default Home;
