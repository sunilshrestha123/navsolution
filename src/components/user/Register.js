import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../service/api';
import {
  ButtonToolbar,
  Button,
  Modal,
  Form,
  Col,
  type,
  smClose,
  lgClose
} from 'react-bootstrap';

class Register extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      lgShow: false
    };
  }
  onSubmit = async () => {
    console.log('here.......');
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('mobile').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('confPassword').value;
    const dateofBirth = document.getElementById('dateofBirth').value;
    const genders = this.state.onChangeValue;
    const isPasswordConfirmed = password === confPassword ? true : false;
    if (isPasswordConfirmed) {
      const playload = {
        fName: firstName,
        mName: middleName,
        lName: lastName,
        email: email,
        phone: phone,
        mobile: mobile,
        password: password,
        dob: dateofBirth,
        genders: genders
      };
      const result = await registerUser(playload);
      if ((result.status = '201')) {
        alert('Sucessfully register');
      }
    } else {
      alert('your password doesnot match');
    }
  };
  onChangeValue = gender => {
    return gender;
  };
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div>
        <ButtonToolbar>
          <Link onClick={() => this.setState({ lgShow: true })}>Register</Link>

          <Modal
            size='lg'
            show={this.state.lgShow}
            onHide={lgClose}
            aria-labelledby='example-modal-sizes-title-lg'
          >
            <Modal.Header closeButton>
              <Modal.Title id='example-modal-sizes-title-lg'>
                Register From
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId='firstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter First Name' />
                  </Form.Group>
                  <Form.Group as={Col} controlId='middleName'>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Middle Name' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='lastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Last Name' />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='email'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter Vaild email'
                    />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group as={Col} controlId='mobile'>
                    <Form.Label>Mobile No:</Form.Label>
                    <Form.Control type='text' placeholder='Enter Mobile no' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='phone'>
                    <Form.Label>Phone:</Form.Label>

                    <Form.Control type='text' placeholder='Enter Phone no ' />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='confPassword'>
                    <Form.Label>Conform Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='dateofBirth'>
                    <Form.Label>Date OF birth</Form.Label>
                    <Form.Control type='date' />
                  </Form.Group>
                  <Form.Group as={Col} controlId='gender'>
                    <Form.Label>Gender</Form.Label>
                    {['radio'].map(type => (
                      <div key={`custom-inline-${type}`} className='gen'>
                        <Form.Check
                          custom
                          inline
                          onChange={() => this.onChangeValue('male')}
                          name='gender'
                          label='Male'
                          type={type}
                          id={`custom-inline-${type}-1`}
                        />
                        <Form.Check
                          custom
                          inline
                          name='gender'
                          label='Female'
                          type={type}
                          onChange={() => this.onChangeValue('female')}
                          id={`custom-inline-${type}-2`}
                        />
                        <Form.Check
                          custom
                          inline
                          name='gender'
                          label='Other'
                          onChange={() => this.onChangeValue('other')}
                          type={type}
                          id={`custom-inline-${type}-3`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId='formBasicChecbox'>
                  <Form.Check type='checkbox' label='Check me out' />
                </Form.Group>
                <Button variant='primary' onClick={this.onSubmit}>
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Register;
