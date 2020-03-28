/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import getPeopleById from '../scripts/personsClassify';


class Person extends React.Component {
  render() {
    const { people } = this.props;
    return (
      <div className="row">
        <div className="col">
          { people.name }
        </div>
      </div>
    );
  }
}


Person.propTypes = {
  people: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default (Person);
