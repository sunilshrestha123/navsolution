import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// const fottercss = {
//   position: 'fixed',
//   left: '0',
//   bottom: '0',
//   width: '100%',

//   textAlign: 'center'
// };
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs={3} md={3}>
            <ListGroup variant='flush'>
              <ul style={{ listStyleType: 'none' }}>
                <h3>QUICK LINK</h3>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/aboutus'>About Us</Link>
                </li>
                <li>
                  <Link to='/contactus'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/carrer'>Carrer</Link>
                </li>
              </ul>
            </ListGroup>
            {/* </> */}
          </Col>
          <Col xs={3} md={3}>
            <h3>Company</h3>
          </Col>
          <Col xs={6} md={3}>
            <h3>Solutions</h3>
          </Col>
        </Row>
        <div className='copy-right'>Copyright@2019 Nav solution pvt.ltd </div>
      </Container>
    </div>
  );
};

export default Footer;
