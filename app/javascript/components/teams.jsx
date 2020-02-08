import axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { loadTeams } from '../actions/index';
import classifier from '../scripts/continentClassify'

class Teams extends React.Component {
  async componentDidMount() {
    const { loadTeams } = this.props;

    axios.defaults.headers.common['x-rapidapi-host'] = 'restcountries-v1.p.rapidapi.com';
    axios.defaults.headers.common['x-rapidapi-key'] = '1033cb5a0bmshe605dbb12c196fcp1dc3f9jsn7633a6f60df8';
    axios.defaults.headers.common.accepts = 'json';
    const teams = await axios.get('https://restcountries-v1.p.rapidapi.com/all');

    // axios.defaults.headers.common['x-rapidapi-host'] = 'montanaflynn-fifa-world-cup.p.rapidapi.com';
    // axios.defaults.headers.common['x-rapidapi-key'] = '1033cb5a0bmshe605dbb12c196fcp1dc3f9jsn7633a6f60df8';
    // axios.defaults.headers.common.accepts = 'json';
    // const teams = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams');

    loadTeams(teams.data);
  }

  render() {
    const { teamsList } = this.props;

    if (!teamsList) {
      return (<div>Loading...</div>);
    }

    const continentCountries = classifier(teamsList);
    console.log(continentCountries);

    return (
      <div>
          <div className="container">
            <div className="row">
              { teamsList.map((item) => (
                <div key={item.numericCode}  className="country col-4 col-sm-4 col-md-3">
                  <h5>{ `${item.name}` }</h5>
                  <img src={`https://salnazi.000webhostapp.com/country_api/flags/${item.alpha2Code.toLowerCase()}.svg`} alt={`flag of ${item.name}`} />
                </div>
              ))}
        </div>
      </div>
      </div>
    );
  }
}

Teams.propTypes = {
  loadTeams: PropTypes.instanceOf(Function).isRequired,
  // teamsList: PropTypes.shape({}).isRequired,
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  teamsList: state.teamsList,
});

const mapDispatchToProps = dispatch => ({
  loadTeams: teams => dispatch(loadTeams(teams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
