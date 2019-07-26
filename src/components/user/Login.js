import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: true
    };
  }

  render() {
    if (this.state.logedIn) {
      return <div>hello i am sunil </div>;
    } else {
      return <div>hello i am not a sunil</div>;
    }
    // return <div>hello</div>;
  }
}

export default Login;
