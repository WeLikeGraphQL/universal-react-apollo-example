/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import WOW from 'wow.js/dist/wow.js';

import 'flag-icon-css/css/flag-icon.css';
import { Header, Page } from 'components';
import './styles.css';

export default class App extends React.Component {

  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <div className="application">
        <Header />
        <Page />
      </div>
    );
  }
}
