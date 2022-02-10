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
                    <Nav.Link active href="/home">Dashboard</Nav.Link>
                    <Nav.Link eventKey="link-1">Add House</Nav.Link>
                    <Nav.Link eventKey="link-2">Edit House</Nav.Link>
                    <Nav.Link eventKey="link-1">Houses To Rent</Nav.Link>
                    <Nav.Link eventKey="link-2">Houses On Sale</Nav.Link>
                    <Nav.Link eventKey="link-2">Booked Houses</Nav.Link>
                    <Nav.Link eventKey="link-1">Rented Houses</Nav.Link>
                    <Nav.Link eventKey="link-2">Sold Houses</Nav.Link>
                </Nav>
            </Card>
        </Container>
    )
}

export default Sidebar