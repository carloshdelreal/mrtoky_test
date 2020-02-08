/* eslint-disable arrow-parens */
/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { loadTeams, loadCountries, loadGames } from '../actions/index';
import Home from './home';
import Matches from './matches';


const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  async componentDidMount() {
    const { loadCountries, loadTeams, loadGames } = this.props;

    axios.defaults.headers.common['x-rapidapi-host'] = 'restcountries-v1.p.rapidapi.com';
    axios.defaults.headers.common['x-rapidapi-key'] = '1033cb5a0bmshe605dbb12c196fcp1dc3f9jsn7633a6f60df8';
    axios.defaults.headers.common.accepts = 'json';
    const countries = await axios.get('https://restcountries-v1.p.rapidapi.com/all');

    axios.defaults.headers.common['x-rapidapi-host'] = 'montanaflynn-fifa-world-cup.p.rapidapi.com';
    axios.defaults.headers.common['x-rapidapi-key'] = '1033cb5a0bmshe605dbb12c196fcp1dc3f9jsn7633a6f60df8';
    axios.defaults.headers.common.accepts = 'json';
    const teams = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams');
    const games = await axios.get('https://montanaflynn-fifa-world-cup.p.rapidapi.com/games');

    loadCountries(countries.data);
    loadTeams(teams.data);
    loadGames(games.data);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/matches" component={Matches} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadTeams: PropTypes.instanceOf(Function).isRequired,
  loadGames: PropTypes.instanceOf(Function).isRequired,
  loadCountries: PropTypes.instanceOf(Function).isRequired,
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  loadTeams: teams => dispatch(loadTeams(teams)),
  loadCountries: countries => dispatch(loadCountries(countries)),
  loadGames: games => dispatch(loadGames(games)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
