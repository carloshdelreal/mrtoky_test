import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Navigator from './navigation';

// eslint-disable-next-line react/prefer-stateless-function
class Matches extends React.Component {
  render() {
    const { gameList } = this.props;

    if (!gameList) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <Nav />
        <Navigator />
        Here are the matches
      </div>
    );
  }
}

Matches.propTypes = {
  gameList: PropTypes.shape([]).isRequired,
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  gameList: state.gameList,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
