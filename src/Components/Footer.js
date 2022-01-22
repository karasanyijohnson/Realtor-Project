
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import {BsInstagram, BsFacebook, BsWhatsapp,BsTelephone} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {BiCopyright} from 'react-icons/bi';
import '../AppCss/footer.css'


const Footer =()=>{
    return(
        
        <Card.Footer style={{background:'#334155'}}>
            <Row>
                <Col>
                <h2 style={{color:'white'}}>REALTOR</h2>
                <p style={{color:'white'}}> <BiCopyright/> 2022 REALTOR</p>
                </Col>
                <Col>
                <h3 style={{color:'white'}}>Product</h3>
                <p><Card.Link href='#'className=' footerLink'>Rental Houses</Card.Link></p>
                <p><Card.Link href='#' className=' footerLink'>Houses for sale</Card.Link></p>
                <p> <Card.Link href='#' className=' footerLink'>Sell Your House</Card.Link></p>
                </Col>
                <Col>
                <h3 style={{color:'white'}}>Support</h3>
                <p><Card.Link href='#'className=' footerLink'>Privacy Policy</Card.Link></p>
                <p><Card.Link href='#'className=' footerLink'>How We work</Card.Link></p>
                <p ><Card.Link href='#' className=' footerLink'>Book Appointment</Card.Link></p>
                </Col>
                <Col>
                <h3 style={{color:'white'}}>Connect with us</h3>
                <Card.Body>
                <Row>
                    <Col>
                    <Card.Link href='#'className=' footerLink'><BsInstagram/></Card.Link>
                    </Col>
                    <Col>
                    <Card.Link href='#'className=' footerLink'><BsFacebook/></Card.Link>
                    </Col>
                    <Col>
                    <Card.Link href='#'className=' footerLink'><BsWhatsapp/></Card.Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Link href='#' className=' footerLink'><BsTelephone/></Card.Link>
                    </Col>
                    <Col xs lg="8">
                    <p style={{color:'white'}}>+250 7888-555-555</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Link href='#' className=' footerLink'><MdOutlineMail/></Card.Link>
                    </Col>
                    <Col xs lg="8">
                    <p style={{color:'white'}}>reactor@gmail.com</p>
                    </Col>
                </Row>
                </Card.Body>
                </Col>
            </Row>
        </Card.Footer>
    )
}

export default Footer;