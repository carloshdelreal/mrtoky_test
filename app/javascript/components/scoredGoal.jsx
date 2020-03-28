/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';


class ScoredGoal extends React.Component {
  render() {
    const { person, goal } = this.props;
    return (
      <div className="row">
        <div className="col">
          { goal.minute }
        </div>
        <div className="col">
          { goal.owngoal === 'f' ? 'no' : 'si' }
        </div>
        <div className="col">
          {goal.penalty === 'f' ? 'no' : 'si' }
        </div>
        <div className="col">
          {goal.team_id}
        </div>
        <div className="col">
          {person.name}
        </div>
      </div>
    );
  }
}


ScoredGoal.propTypes = {
  goal: PropTypes.shape({
    minute: PropTypes.number,
    owngoal: PropTypes.string,
    penalty: PropTypes.string,
    team_id: PropTypes.number,
  }).isRequired,
  person: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default (ScoredGoal);
