
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import {BsInstagram, BsFacebook, BsWhatsapp,BsTelephone} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {BiCopyright} from 'react-icons/bi';
import './Footer.css'


const Footer =()=>{
    return(
        <Card style={{background:'#334155'}}>
         <Row style={{display:'flex', justifyContent:'space-between', color:'#FFFFFF'}}>
         <Col>
         <h1>REALTOR</h1>
         <Row style={{justifyContent:'center', alignItems:'center', display:'flex'}}>    
         <Col>
         <BiCopyright/>
         </Col>  
         <Col>
         <p>2022 REALTOR</p>
         </Col>
        </Row>
         </Col>
         <Col>
         <h2>Product</h2>
         <p><Card.Link href='/'  className='footerLink'>Rental Houses</Card.Link></p>
         <p><Card.Link href='/'  className='footerLink'>Houses for sale</Card.Link></p>
         <p><Card.Link href='/'  className='footerLink'>Sell Your House</Card.Link></p>
         </Col>
         <Col>
         <h2>Support</h2>
         <p><Card.Link href='/' className='footerLink'> Privacy Policy</Card.Link></p>
         <p><Card.Link href='/' className='footerLink'>How We work</Card.Link></p>
         <p><Card.Link href='/'  className='footerLink'>Book Appointment</Card.Link></p>
         </Col>
         <Col>
         <h1>Connect with us</h1>
         <Row style={{display:'flex', justifyContent:'space-between', width:'70%'}} >
             <Col>
            <Card.Link className='footerLink'><BsInstagram/></Card.Link>
             </Col>
             <Col>
             <Card.Link className='footerLink' ><BsFacebook/></Card.Link>
             </Col>
             <Col><Card.Link className='footerLink'><BsWhatsapp/></Card.Link></Col>
         </Row>
         <Row style={{display:'flex', justifyContent:'space-between',width:'70%'}} >
             <Col><Card.Link  className='footerLink'> <BsTelephone/></Card.Link></Col>
             <Col>+250 748 787 888</Col>
         </Row>
         <Row style={{display:'flex', justifyContent:'space-between', width:'90%'}} >
             <Col><Card.Link className='footerLink'><MdOutlineMail/></Card.Link></Col>
             <Col>realtor2022@gmail.com</Col>
         </Row>
         </Col>
         </Row>
        </Card>
    )
}

export default Footer;