import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navlogo from '../assets/image/nav.png';

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
          // fixed='top'
        >
          <Navbar.Brand>
            <Link to='/'>
              {' '}
              <img
                src={navlogo}
                alt='navlogo'
                style={{ width: '100px', height: '50px', float: 'left' }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link href='#pricing'>
                <Link to='/aboutus'>ABOUT US</Link>
              </Nav.Link>
              <NavDropdown title='PRODUCT' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  Satellite Equipment
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.1'>
                  FTTH Equipment
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  EASY CG and ONAIR(playout and CG)
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Studio Setup and Accessories
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Cameras and Accessories
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  TV,RADIO Transmitter
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Uniplay(PLayout & CG)
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Complete BroadCaasting solution
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>{' '}
              <Nav.Link href='#pricing'>OUR SERVICES</Nav.Link>
              <Nav.Link href='#pricing'>LIVE TV/NEWS</Nav.Link>
              <Nav.Link>
                {' '}
                <Link to='/contactus'>CONTACT-US</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to='/login'>Help</Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to='register'>About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
