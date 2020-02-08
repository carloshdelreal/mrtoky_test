/* eslint-disable arrow-parens */
/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React, { Component } from 'react';
import Home from './home';


const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
