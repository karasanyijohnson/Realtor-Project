import React, { useState, } from 'react'
import { FcGoogle } from 'react-icons/fc'
import '../Authentication/Login.css'
import PropTypes from 'prop-types';
import image from '../../Images/undraw_secure_login_pdn4.png';
import { Row, Col, InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'


const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  return (
    <Card style={{ border: '0px', padding: '20px' }}>
      <Row>
        <Col>
          <Card style={{ height: '100%', border: '0px' }}>
            <Card.Img src={image} style={{ height: '70%' }} />
            <Card.Footer
              style={{
                height: '30%',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                border: '0px',
                background: 'white'
              }}
            >
              <Card.Text style={{ fontSize: '25px' }}>Already have an account?</Card.Text>
              <Button
                style={{
                  width: '296px',
                  height: '78px',
                  background: '#A16207',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '25px',
                  lineHeight: '31px'
                }}
                onClick={() => { navigate('/login') }}
              >
                Sign In
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: '100%', border: '0px' }}>
            <Card style={{ height: '70%', border: '0px' }}>
              <Card.Title
                style={{
                  color: '#A16207',
                  textAlign: 'center',
                  fontSize: '48px',
                  fontWeight: '500',
                  lineHeight: '60px',
                  padding: '20px'
                }}
              >
                Sign Up
              </Card.Title>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  type='Email'
                  style={{
                    width: '583px',
                    height: '70px',
                    background: 'rgba(196, 196, 196, 0.05)',
                    border: '1px solid #A16207',
                    borderRadius: '20px'
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  style={{
                    width: '583px',
                    height: '70px',
                    background: 'rgba(196, 196, 196, 0.05)',
                    border: '1px solid #A16207',
                    borderRadius: '20px'
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                  style={{
                    width: '583px',
                    height: '70px',
                    background: 'rgba(196, 196, 196, 0.05)',
                    border: '1px solid #A16207',
                    borderRadius: '20px'
                  }}
                />
              </InputGroup>
              <Button
                style={{
                  width: '100%',
                  height: '70px',
                  background: '#A16207',
                  border: '1px solid #A16207',
                  borderRadius: '20px',
                  fontSize: '36px'
                }}
                onClick={() => {
                  navigate('/')
                }}>
                Sign Up
              </Button>
            </Card>
            <Card.Footer
              style={{
                height: '30%',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                alignItems: 'center',
                border: '0px',
                background: 'white'
              }}
            >
              <Button
                style={{
                  width: '70%',
                  height: '68px',
                  background: '#FFFFFF',
                  border: '2px solid #A16207',
                  borderRadius: '40px',
                  color: '#000000',
                  fontWeight: '200',
                  fontSize: '36px',
                  lineHeight: '45px',
                  fontStyle: 'normal',
                  fontFamily: 'Mulish'
                }}
                onClick={() => { navigate('/') }}
              >
                <FcGoogle />&nbsp;&nbsp;Sign Up With Google</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Card>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login