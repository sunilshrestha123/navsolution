import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Register from '../../components/user/Register';
import facebook from '../../components/assets/image/facebook.png';
import youtube from '../../components/assets/image/youtube.png';
import twitter from '../../components/assets/image/twitter.png';
import instagram from '../../components/assets/image/instagram.png';

class TopBar extends Component {
  render() {
    return (
      <div className='top-bar'>
        <Container>
          <Row>
            <Col sm={6}>
              <ul className='nav-bar-link'>
                <li>
                  <Link to='/#'>info@navsolution.com</Link>
                </li>
                <li>01-5156335</li>
                <li>9860689684</li>
              </ul>
            </Col>
            <Col sm={6}>
              <ul className='nav-bar-link'>
                <li>
                  <Link to='/aboutus'>About Nav</Link>
                </li>
                <li>
                  <Link to='/fqa'>FAQ</Link>
                </li>
                <li>
                  <Link to='/login'>login</Link>
                </li>
                <li>
                  <Register />
                </li>
                <li>
                  <a href='https://www.facebook.com/navsolution/'>
                    <img
                      src={facebook}
                      alt='facebook'
                      style={{ height: '15px', width: '15px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/navsolution/'>
                    <img
                      src={youtube}
                      alt='facebook'
                      style={{ height: '20px', width: '20px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/navsolution/'>
                    <img
                      src={twitter}
                      alt='facebook'
                      style={{ height: '20px', width: '20px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/navsolution/'>
                    <img
                      src={instagram}
                      alt='facebook'
                      style={{ height: '20px', width: '20px' }}
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TopBar;
