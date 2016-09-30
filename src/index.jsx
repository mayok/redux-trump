import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

require('../css/app.css');

render(
  <Root />,
  document.getElementById('root')
);
