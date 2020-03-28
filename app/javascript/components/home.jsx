import React from 'react';
import { Link } from 'react-router-dom';
import Teams from './teams';
import Nav from './nav';
import Navigator from './navigation';

const Home = () => (
  <div>
    <Nav />
    <Navigator />
    <Teams />
  </div>
);

export default Home;
