/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { queryGoals } from '../actions/index';

const categories = [['Al minuto','='], ['Antes del minuto','<'], ['despues del minuto', '>']];

class GoalsForm extends Component {
  constructor() {
    super();
    this.state = {
      expression: '=',
      minute: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = { ...this.state };
    const { queryGoals } = this.props;
    queryGoals(query);
  }

  render() {
    const { expression, minute } = this.state;
    return (
      <form className="goalsForm" onSubmit={this.handleSubmit}>
        <h2 className="goalsForm__title">Buscar Goles</h2>
        <div className="formContainer">
          <input
            className="goalForm__input"
            type="number"
            name="minute"
            placeholder="minuto"
            onChange={this.handleChange}
            value={minute}
            required
          />
          <select className="selection-box goalsForm__selection" name="expression" required value={expression} onChange={this.handleChange}>
            {categories.map(catg => (
              <option
                key={catg[1]}
                value={catg[1]}
                defaultValue
              >
                {catg[0]}
              </option>
            ))}
          </select>
          <input className="goalsForm__submit btn" type="submit" value="submit" />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  queryGoals: query => dispatch(queryGoals(query)),
});

queryGoals.propTypes = {
  queryGoals: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(GoalsForm);
