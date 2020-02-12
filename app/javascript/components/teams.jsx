import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import { countriesToDict, teamsToDict } from '../scripts/continentClassify';

// eslint-disable-next-line react/prefer-stateless-function
class Teams extends React.Component {
  render() {
    const { countriesList, teamsList, gameList } = this.props;

    if (!countriesList || !teamsList || !gameList) {
      return (<div>Loading...</div>);
    }
    const countriesDict = countriesToDict(countriesList, teamsList);
    
    const continents = ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas'];

    const teamsDict = teamsToDict(teamsList);

    const participants = {};
    gameList.forEach((game) => {
      if (participants[game.team1_id] === undefined) {
        participants[game.team1_id] = teamsDict[game.team1_id];
      }
    });

    let list = Object.values(participants);
    list = list.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      return 1;
    });
    console.log(list);
    return (
      <div>
        <div className="container">
          <div className="row">
            { list.map((item) => (
              <div key={item.code} className="country col-4 col-sm-4 col-md-3">
                <h5>{ `${item.title}` }</h5>
                <img src={`https://salnazi.000webhostapp.com/country_api/flags/${item.code.toLowerCase().slice(0,2)}.svg`} alt={`flag of ${item.name}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Teams.propTypes = {
  gameList: PropTypes.shape({}).isRequired,
  teamsList: PropTypes.shape({}).isRequired,
  countriesList: PropTypes.shape([]).isRequired,
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  teamsList: state.teamsList,
  countriesList: state.countriesList,
  gameList: state.gameList,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
