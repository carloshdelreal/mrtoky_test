import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
// eslint-disable-next-line import/no-unresolved
require('channels');
require('jquery');


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});
