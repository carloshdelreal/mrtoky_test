/* eslint-disable react/prefer-stateless-function */
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Person from './person';
import goleadoresByTeam from '../scripts/goleadoresClassify';
import createPeopleDict from '../scripts/peopleDict';
import PaginacionTabla from './paginaTable';

class GoleadorList extends React.Component {
  render() {
    const { goalsList, peopleList, teamsList } = this.props;
    if (!goalsList || !peopleList || !teamsList) {
      return <div>Cargando Goleadores</div>;
    }

    const list = goleadoresByTeam(goalsList);
    const dict = createPeopleDict(peopleList);
    const teamsDict = createPeopleDict(teamsList);

    return (
      <div className="personsList">
        <ul>
          { list.map((item, index) => (
            <li key={index.toString()}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    {teamsDict[item.team].title}
                  </div>
                  <div className="col">
                    <Person people={dict[item.player]} />
                  </div>
                  <div className="col">
                    {item.goals}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

GoleadorList.defaultProps = {
  goalsList: [],
  peopleList: [],
  teamsList: [],
};

GoleadorList.propTypes = {
  goalsList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  peopleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      key: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  teamsList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  goalsList: state.goalsList,
  peopleList: state.peopleList,
  teamsList: state.teamsList,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GoleadorList);
