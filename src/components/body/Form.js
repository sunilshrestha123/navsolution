import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: ''
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleGenderChange = event => {
    this.setState({
      gender: this.target.value
    });
  };
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handleSubmit = event => {
    alert(`${this.state.name} ${this.sate.email} ${this.state.gender}`);
    // event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <lable>Name</lable>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <lable>Email</lable>
          <input
            type='text'
            value={this.state.email}
            onChange={this.handleEmailChange}
          />{' '}
          <lable>Gender</lable>
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
