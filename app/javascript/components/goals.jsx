import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Goals extends React.Component {
  render() {
    const { goalsList } = this.props;

    if (!goalsList) {
      return (<div>Loading...</div>);
    }

    return (
      <div className="container">
        <div className="row">
          hello
        </div>
      </div>
    );
  }
}

Goals.propTypes = {
  goalsList: PropTypes.shape([]).isRequired,
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  goalsList: state.goalsList,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
