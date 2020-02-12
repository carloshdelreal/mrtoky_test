import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Navigator from './navigation';

// eslint-disable-next-line react/prefer-stateless-function
class Matches extends React.Component {
  render() {
    const { gameList, roundsList, participantsList } = this.props;

    if (!gameList || !roundsList || !participantsList) {
      return (<div>Loading...</div>);
    }

    const roundsDict = {};
    roundsList.forEach(element => {
      roundsDict[element.id] = element;
    });

    const list = gameList.sort((a, b) => {
      if (a.play_at < b.play_at) {
        return -1;
      }
      return 1;
    });

    return (
      <div className="matches">
        <Nav />
        <Navigator />
        <ul>
          { list.map((match) => (
            <li key={match.id}>
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    {roundsDict[match.round_id].title}
                  </div>
                  <div className="col text-center">
                    {match.play_at.slice(0, 10)}
                  </div>
                  <div className="col text-center">
                    {participantsList[match.team1_id].title}
                    -
                    {participantsList[match.team2_id].title}
                  </div>
                  <div className="col text-center">
                    {match.score1}
                    -
                    {match.score1}
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

Matches.defaultProps = {
  roundsList: [],
  gameList: [],
  participantsList: {},
};

Matches.propTypes = {
  gameList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  roundsList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  participantsList: PropTypes.shape({}),
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  gameList: state.gameList,
  roundsList: state.roundsList,
  participantsList: state.participantsList,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
