import React from 'react';
import { Card, Container, Nav } from 'react-bootstrap';
import {FiMenu} from 'react-icons/fi'

const Sidebar = (props) => {
    return (
        <Container>
            < Card>
              <FiMenu/>
            </Card>
            <Card>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link active href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/addHouse">Add House</Nav.Link>
                    <Nav.Link href='/editHouse'>Edit House</Nav.Link>
                    <Nav.Link href='/housesToRent'>Houses To Rent</Nav.Link>
                    <Nav.Link href='/housesOnSale'>Houses On Sale</Nav.Link>
                    <Nav.Link href='/bookedHouses'>Booked Houses</Nav.Link>
                    <Nav.Link href='/rentedHouses'>Rented Houses</Nav.Link>
                    <Nav.Link href='/soldHouses'>Sold Houses</Nav.Link>
                </Nav>
            </Card>
        </Container>
    )
}

export default Sidebar