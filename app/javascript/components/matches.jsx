import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Navigator from './navigation';

const Matches = () => {
  return (
    <div>
      <Nav />
      <Navigator />
      Here are the matches
    </div>
  );
};

export default Matches;
