import React from 'react';
import { Card, Container, Nav } from 'react-bootstrap';
import {FiMenu} from 'react-icons/fi';
import '../../AppCss/sidebarAdminPage.css'

const Sidebar = (props) => {
    return (
        <Container style={{background:'#F5F5F5', height:'100%'}}>
            <Card style={{alignItems:'end', background:'#F5F5F5', border:'0px'}}>
              <Card.Title style={{marginTop:'20px', marginBottom:'20px',}}><FiMenu /></Card.Title>
            </Card>
            <Card style={{alignItems:'center',background:'#F5F5F5', border:'0px'}}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link active href="/dashboard" className='activeLink'>Dashboard</Nav.Link>
                    <Nav.Link href="/addHouse" className='navLink'>Add House</Nav.Link>
                    <Nav.Link href='/editHouse' className='navLink'>Edit House</Nav.Link>
                    <Nav.Link href='/housesToRent' className='navLink'>Houses To Rent</Nav.Link>
                    <Nav.Link href='/housesOnSale' className='navLink'>Houses On Sale</Nav.Link>
                    <Nav.Link href='/bookedHouses' className='navLink'>Booked Houses</Nav.Link>
                    <Nav.Link href='/rentedHouses' className='navLink'>Rented Houses</Nav.Link>
                    <Nav.Link href='/soldHouses' className='navLink'>Sold Houses</Nav.Link>
                </Nav>
            </Card>
        </Container>
    )
}

export default Sidebar