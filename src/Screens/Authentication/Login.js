import React, { useState, } from 'react'
import { FcGoogle } from 'react-icons/fc'
import PropTypes from 'prop-types';
import image from '../../Images/undraw_Login_re_4vu2.png'
import { Row, Card, Button, Col, InputGroup, FormControl, Container, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'
import '../../AppCss/Login.css'


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  // Function to submit the login data in form
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }
  return (
    <Container>
      <Card className='cardContainer'>
      <Row>
        <Col className='leftColumn'>
          <Card className='signinContainer'>
            <Card.Text className='signinHeader'>Sign In</Card.Text>
          </Card>
          <Card className='form_input_container'>
            <Form>
              <Form.Group className="FormInputGroup" controlId="formBasicEmail">
                <Form.Control className='forminputControl' type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="FormInputGroup" controlId="formBasicPassword">
                <Form.Control className='forminputControl' type="password" placeholder="Password" />
              </Form.Group>
              <Card style={{border:'0px'}}>
                <Button variant="primary" className='signinButton' onClick={()=>{
                  navigate('/')
                }}>
                  Sign In
                </Button>
              </Card>
            </Form>
          </Card>
          <Card className='ResetandGoogleSigin'>
            <Link to='/reset' className='link_Reset'>
            <Card.Text className='resetText'>Forgot Password?</Card.Text>
            </Link>
            <Button className='googleSignin'><FcGoogle />Sign In With Google</Button>
          </Card>
        </Col>
        <Col className='rightColumn'>
          <Card className='right_column_image'>
            <Card.Img src={image} />
          </Card>
          <Card className='donothaveAccountContainer' >
            <Card.Text className='do_not_have_an_account_Text'>Do not have an account?</Card.Text>
            <Button className='go_to_SignUp' onClick={()=>{
              navigate('/signup')
            }}>Sign Up</Button>
          </Card>
        </Col>
      </Row>
      </Card>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login