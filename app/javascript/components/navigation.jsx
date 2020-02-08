import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => (
  <div className="container navigator">
    <div className="row">
      <div className="col-4">
        <Link to="/" activeStyle={{ color: 'red' }}>
          Participants
        </Link>
      </div>
      <div className="col-4">
        <Link to="matches" activeStyle={{ color: 'red' }}>
          Matches
        </Link>
      </div>
    </div>
  </div>
);

export default Navigator;
