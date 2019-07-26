import React from 'react';

import ShoppingItem from './Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCollection: []
    };
  }

  componentWillMount() {
    const myItems = [
      {
        name: 'Long jeans',
        price: '100',
        listDate: '12th March'
      },
      {
        name: 'Short jeans',
        price: '50',
        listDate: '18th March',
        discount: true
      },
      {
        name: 'Ladies jeans',
        price: '160',
        listDate: '11th March'
      },
      {
        name: ' jeans',
        price: '20',
        listDate: '18th May'
      },
      {
        name: 'Men jeans',
        price: '20',
        listDate: '18th May',
        discount: true
      },
      {
        name: 'mens jacket ',
        price: '34',
        listDate: '30 merch',
        discount: true
      }
    ];
    this.setState({
      myCollection: myItems
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <span>
        {this.state.myCollection.map(item => (
          <ShoppingItem
            names={item.name}
            listedPrice={item.price}
            listedDate={item.listDate}
            hasDiscount={item.discount}
          />
        ))}
      </span>
    );
  }
}

export default ProductList;
