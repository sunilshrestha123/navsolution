import React, { Component } from 'react';
import './App.css';
import './components/assets/css/footer.css';
import './components/assets/css/slider.css';
import './components/assets/css/header.css';
import './components/assets/css/topbar.css';
import './components/assets/css/body.css';

import { Container, Row, Col, Media } from 'react-bootstrap';
import Navbars from './components/header/Navbars';
import Error from './components/body/Error';
import Contact from './components/body/Contact';

import Ourservice from './components/body/Ourservice';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Aboutus from './components/body/Aboutus';
import Slider from './components/body/Slider';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import Foot from './components/footer/Foot';
// import ShoppingItemCollection from './components/product/ShoppingItemCollection';

// import Register from './components/body/Register';
import Footer from './components/footer/Footer';
import ProductList from './components/product/ProductList';
import navlogo from './components/assets/image/nav.png';
import Register from './components/user/Register';
import TopBar from './components/header/TopBar';
import Form from './components/body/Form';
import Login from './components/user/Login';
import Satesexample from './components/Satesexample';
import Notfound from './components/body/Notfound';

library.add(faStroopwafel);
class App extends Component {
  render() {
    return (
      <Router>
        <TopBar />
        <div className='App'>
          <Navbars />

          <div style={{ marginTop: '60px' }}>
            <Route exact path='/' component={Slider} />
            <Route conponent={Notfound} />
            <Route render={() => <Error app='error' />} exact path='/home' />
            <Route
              render={() => <Aboutus app='aboutus' />}
              exact
              path='/aboutus'
            />
            <Route render={() => <Contact app='' />} exact path='/contact' />
            <Route
              render={() => <Ourservice app='' />}
              exact
              path='/service'
            />{' '}
            <Ourservice service={true} />
            <Login />
            <Satesexample />
            <div />
          </div>
        </div>
        <Form />
        <Footer />
      </Router>
    );
  }
}

export default App;
