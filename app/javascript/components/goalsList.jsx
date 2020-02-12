/* eslint-disable react/prefer-stateless-function */
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import selectGoalsByMinute from '../scripts/goalsClassify';
import ScoredGoal from './scoredGoal';

class GoalsList extends React.Component {
  render() {
    const { goalsList, queryGoals, peopleDict } = this.props;
    if (!goalsList || !queryGoals || !peopleDict) {
      return <div>selecciona un minuto y una expresión para ver los goles correspondientes</div>;
    }
    const list = selectGoalsByMinute(
      goalsList,
      parseInt(queryGoals.minute, 10),
      queryGoals.expression,
    );

    if (list.length === 0) {
      return <div>No se marcaron goles</div>;
    }

    return (
      <div className="goalsList">
        <ul>
          <li>
            <div className="row">
              <div className="col">
                <h5>Minuto</h5>
              </div>
              <div className="col">
                <h5>Autogol</h5>
              </div>
              <div className="col">
                <h5>Penalty</h5>
              </div>
              <div className="col">
                <h5>Equipo</h5>
              </div>
              <div className="col">
                <h5>Jugador</h5>
              </div>
            </div>
          </li>
          { list.map((goal) => (
            <li key={goal.id.toString()}>
              <ScoredGoal goal={goal} person={peopleDict[goal.person_id]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

GoalsList.defaultProps = {
  goalsList: [],
  queryGoals: {},
  peopleDict: {},
};

GoalsList.propTypes = {
  goalsList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  queryGoals: PropTypes.shape({
    minute: PropTypes.string,
    expression: PropTypes.string,
  }),
  peopleDict: PropTypes.shape({}),
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  goalsList: state.goalsList,
  queryGoals: state.queryGoals,
  peopleDict: state.peopleDict,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);
