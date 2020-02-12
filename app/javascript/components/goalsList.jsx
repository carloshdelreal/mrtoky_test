/* eslint-disable react/prefer-stateless-function */
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import selectGoalsByMinute from '../scripts/goalsClassify';


const Goal = ({ goal }) => (
  <div className="row">
    <div className="col">
      Minuto:
      { goal.minute }
    </div>
    <div className="col">
      Autogol:
      { goal.owngoal }
    </div>
    <div className="col">
      Penalty:
      {goal.penalty}
    </div>
    <div className="col">
      Equipo:
      {goal.team_id}
    </div>
    <div>
      Jugador:
      {goal.person_id}
    </div>
  </div>
);


class GoalsList extends React.Component {
  render() {
    const { goalsList, queryGoals } = this.props;
    if (!goalsList || !queryGoals) {
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
          { list.map((goal) => (
            <li key={goal.id.toString()}>
              <Goal goal={goal} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Goal.propTypes = {
  goal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    minute: PropTypes.number.isRequired,
  }).isRequired,
};

GoalsList.defaultProps = {
  goalsList: [],
  queryGoals: {},
};

GoalsList.propTypes = {
  goalsList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  queryGoals: PropTypes.shape({
    minute: PropTypes.string,
    expression: PropTypes.string,
  }),
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  goalsList: state.goalsList,
  queryGoals: state.queryGoals,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);
