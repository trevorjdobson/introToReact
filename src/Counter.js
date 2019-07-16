'use strict';

import React, { Component, Fragment } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0
    }
  }

  handlePlus = () => {
    let newCount = this.state.counter;
    newCount ++;
    this.setState({counter: newCount});
  }

  handleMinus = () => {
    let newCount = this.state.counter;
    newCount --;
    this.setState({counter: newCount});
  }

  render () {
    return (
      <div className="App">
        <h2 id="counter">{this.state.counter}</h2>
        <button value="plus" type="button" onClick={this.handlePlus}>+</button>
        <button value="minus" type="button" onClick={this.handleMinus}>-</button>
      </div>
    );
  }
}


export default Counter;