import React from 'react';
import Nav from './nav';
import Navigation from './navigation';
import GoleadorList from './goleadorList';

// eslint-disable-next-line react/prefer-stateless-function
class Goleador extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Navigation />
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <GoleadorList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goleador;
