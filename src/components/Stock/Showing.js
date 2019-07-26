import React, { Component } from 'react';

class Showing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Conact: [
        {
          name: 'sunil shrestha',
          price: '23$',
          discount: '20%',
          image: ''
        }
      ]
    };
  }

  render() {
    return <div>Product Shows</div>;
  }
}

export default Showing;
