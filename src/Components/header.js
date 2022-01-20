
import React from 'react';
import {Button, Card, Row, Col } from 'react-bootstrap';
import './header.css'


const Header =()=>{
    return(
        <Card>
         <Row style={{width:'98%'}}>
             <Col style={{display:'flex',justifyContent:'flex-end', background:'(196, 196, 196, 0.1)'}}>
             <p>Kigali, Rwanda &nbsp;&nbsp;</p>
             <p>+ 250 7811 111 111</p>
             </Col>
             </Row>   
        <Row style={{width:'98%', marginLeft:'10px', display:'flex'}}>
            <Col style={{width:'30%'}}>
            <Card style={{justifyContent:'center', alignItems:'center'}}>
             <h1 style={{color:'#A16207'}}>Reactor</h1>
            </Card>
            </Col>
            <Col style={{width:'70%'}}>
            <Card style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Card.Link href="#">Home</Card.Link>
              <Card.Link href="#">About</Card.Link>
              <Card.Link href="#">Contact</Card.Link>
              <Card.Link href="#">Events</Card.Link>
            <Button style={{
                width:'137px',
                background:'rgba(161, 98, 7, 0.1)',
                border:'2px solid #A16207',
                borderRadius:'8px',
                fontSize:'20px'
            }}
            >
            <p>Login</p>
            </Button>
            </Card>
            </Col>
        </Row>
        </Card>
       
    )
}

export default Header;