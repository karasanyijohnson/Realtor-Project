import React,{useState,} from 'react'
import{FcGoogle} from 'react-icons/fc'
import '../Authentication/Login.css'
import PropTypes from 'prop-types';
import image from '../../Images/undraw_secure_login_pdn4.png'
import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


const Login =({setToken})=>{
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return(
      <Container style={{alignItems:'center'}}>
      <Row style={{display:'flex', justifyContent:'center', marginTop:'90px'}}>
        <Card style={{width:'30%', margin:'10px'}}>
        <Card.Body>
          <Card.Img src={image} style={{width:'100%'}}/>
         <Card style={{justifyContent:'center', marginLeft:'120px'}}>
           <Card.Title>
           Already have an account?
           </Card.Title>
         <Link to="/login">
         <Button style={{
           width:'40%',
            borderRadius:'10px',
            background:'#A16207',
            height:'30px',
            border:'1px solid #A16207', 
            boxSizing:'border-box',
            marginTop:'5px',
            color:'#FFFFFF'
        }}
            >
            Sign In
          </Button>
          </Link>
         </Card>
        </Card.Body>
          </Card>
          <Card style={{width:'30%', margin:'10px'}}>
        <Card.Body>
          <Card.Title style={{textAlign:'center', marginBottom:'35px', color:'#A16207', fontSize:'25px', fontWeight:'500'}}>
           Sign Up
          </Card.Title>
      <Card style={{marginTop:'10px',marginBottom:'10px'}}>
      <Form >
         <Form.Group className='mb-3' controlId='formBasicEmail' >
         <Form.Control type='email' placeholder='Email'  required onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
         <Form.Group className='mb-3' controlId='formBasicEmail' >
         <Form.Control type='text' placeholder='Username'  required onChange={(e)=>setUsername(e.target.value)}/>
         </Form.Group>
         <Form.Group className='mb-3' controlId='formBasicPassword'>
         <Form.Control type='password' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}/>
         </Form.Group>
         <Button size='lg' style={{
           width:'90%',
           height:'40px',
           borderRadius:'10px',
           background:'#A16207',
           border:'1px solid #A16207',
           boxSizing:'border-box',
           type:'submit',
           color:'#FFFFFF'
            }}
           
            >
            Sign Up
          </Button>
       </Form>
      </Card>
        <Card>
        <Button style={{
          width:'70%',
          height:'35px',
          background:'FFFFFF',
          borderRadius:'40px',
          marginLeft:'25px',
          justifyContent:'space-evenly',
          display:'flex',
          alignItems:'center',
          border:'2px solid #A16207',
          boxSizing: 'border-box',
          }}
          >
         <FcGoogle style={{width:'25px', height:'25px'}}/>
         <p>Sign Up With Google</p>
         </Button>
        </Card>
        </Card.Body>
        </Card>
      </Row>
      </Container>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }  
export default Login