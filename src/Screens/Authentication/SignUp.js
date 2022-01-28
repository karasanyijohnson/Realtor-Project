import React, { useState, } from 'react'
import { FcGoogle } from 'react-icons/fc'
import '../../AppCss/Signup.css'
import PropTypes from 'prop-types';
import image from '../../Images/undraw_secure_login_pdn4.png';
import { Row, Col, InputGroup, FormControl, Button, Card, Container} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../../Components/Input/inPutField'


const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  return (
    <Container>
      <Card className='cardContainer'>
      <Row>
        <Col>
          <Card className='cardLeft'>
            <Card.Img src={image} className='leftCardImage'/>
            <Card.Footer className='leftCardFooter'>
              <Card.Text className='allready_have_an_account_Text'>Already have an account?</Card.Text>
              <Button className='go_to_Login' onClick={() => { navigate('/login') }}>
                Sign In
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='cardRight' >
            <Card style={{ height: '70%', border: '0px' }}>
              <Card.Title  className='signUp_Text'>Sign Up</Card.Title>
              <InputField  placeholder="Email" label ="Email" describedby="basic-addon1" type="email"
              />
              <InputField placeholder="Username" label ="Username" describedby="basic-addon2" type="name"
              />
               <InputField placeholder="Password" label ="Password" describedby="basic-addon2" type="password"
              />
              <Button className='go_to_home' onClick={() =>{navigate('/')}}> Sign Up </Button>
            </Card>
            <Card.Footer className='card_footer_Signup_right'>
              <Button className='signup_with_google'
                // style={{
                //   width: '70%',
                //   height: '68px',
                //   background: '#FFFFFF',
                //   border: '2px solid #A16207',
                //   borderRadius: '40px',
                //   color: '#000000',
                //   fontWeight: '200',
                //   fontSize: '36px',
                //   lineHeight: '45px',
                //   fontStyle: 'normal',
                //   fontFamily: 'Mulish'
                // }}
                onClick={() => { navigate('/') }}
              >
                <FcGoogle />&nbsp;&nbsp;Sign Up With Google</Button>
            </Card.Footer>
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