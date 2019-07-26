import React, { Component } from 'react';

class Satesexample extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      name: 'null'
    };
    // this.onClickME = this.onClickME.bind(this);
  }
  clickME = () => {
    console.log(this.state);
  };
  clickButton = () => {
    console.log('click');
    console.log(this.state.counter);
    let copycounter = this.state.counter;
    copycounter += 1;
    this.setState({
      counter: copycounter
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickButton}>Click me </button>
        <button onClick={this.clickME}>Click me </button>

        <h3> {this.state.counter}</h3>
      </div>
    );
  }
}

export default Satesexample;
