'use strict';

import React, { Component, Fragment } from 'react';
import Counter from './Counter.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render () {
    return (
      <Fragment>
        <Counter />
      </Fragment>
    );
  }
}

export default App;
