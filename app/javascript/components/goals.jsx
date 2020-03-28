import React from 'react';
import GoalsForm from './goalsForm';
import Nav from './nav';
import Navigation from './navigation';
import GoalsList from './goalsList';


// eslint-disable-next-line react/prefer-stateless-function
class Goals extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Navigation />
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <GoalsForm />
              <GoalsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
