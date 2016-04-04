import 'whatwg-fetch';
import React, { Component, PropTypes }  from 'react';
import ReactDOM, { render }             from 'react-dom';
import { Provider }                     from 'react-redux';
import classNames                       from 'classnames';

import configureStore     from './store';
import HomeContainer      from './containers/HomeContainer';
import { getAccessToken } from './helpers/auth.helpers';

// Fetch and store the Spotify access token in localStorage.
// Will be available when we need it =)
getAccessToken();

require('./scss/main.scss');

const store = configureStore();

render((
  <Provider store={store}>
    <HomeContainer />
  </Provider>
), document.getElementById('render-target'))
