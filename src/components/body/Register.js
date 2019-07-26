import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <input
          type='text'
          name='firstName'
          placeholder='please Enter first name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='lastName'
          placeholder='please Enter first name'
          onChange={this.handleChange}
        />
        <h1>
          {this.state.firstName}
          {this.state.lastName}
        </h1>
        {/* <input
          type='text'
          placeholder='please Enter first name'
          onChange={this.handleChange}
        /> */}
      </div>
    );
  }
}

export default Register;
