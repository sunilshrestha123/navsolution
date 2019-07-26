import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import facebook from './assets/image/facebook.png';
import youtube from './image/youtube.png';
import twitter from './assets/image/twitter.png';
import instagram from './assets/image/instagram.png';

class HeaderNavbar extends Component {
  render() {
    return (
      <div
        style={{
          height: '30px',
          background: '#e1322a',
          borderBottom: '1px solid black'
        }}
      >
        <Container>
          <Row>
            <Col sm={6}>info@navsolution.com</Col>
            <Col sm={6}>
              <ul className='nav-bar-link'>
                <li>
                  <Link to='/aboutnav'>About Nav</Link>
                </li>
                <li>
                  <Link to='/fqa'>FAQ</Link>
                </li>
                <li>
                  <Link to='/login'>login</Link>
                </li>
                <li>
                  <Link to='/register'>register</Link>
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

export default HeaderNavbar;
