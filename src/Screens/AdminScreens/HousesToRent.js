import React from 'react';
import { Container, Row, Col, Nav, Card, Table } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import HeaderDashboard from '../../Components/Admin/HeaderDashboard';
import '../../AppCss/sidebarAdminPage.css'
import '../../AppCss/addHouse.css'

const HouseforRent = () => {
    return (
        <Container fluid >
            <Row>
                <Col>
                    <Container style={{ background: '#F5F5F5', height: '100%' }}>
                        <Card style={{ alignItems: 'end', background: '#F5F5F5', border: '0px' }}>
                            <Card.Title style={{ marginTop: '20px', marginBottom: '20px', }}><FiMenu /></Card.Title>
                        </Card>
                        <Card style={{ alignItems: 'center', background: '#F5F5F5', border: '0px' }}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link active href="/dashboard" className='navLink'>Dashboard</Nav.Link>
                                <Nav.Link href="/addHouse" className='navLink'>Add House</Nav.Link>
                                <Nav.Link href='/editHouse' className='navLink'>Edit House</Nav.Link>
                                <Nav.Link href='/housesToRent' className='activeLink'>Houses To Rent</Nav.Link>
                                <Nav.Link href='/housesOnSale' className='navLink'>Houses On Sale</Nav.Link>
                                <Nav.Link href='/bookedHouses' className='navLink'>Booked Houses</Nav.Link>
                                <Nav.Link href='/rentedHouses' className='navLink'>Rented Houses</Nav.Link>
                                <Nav.Link href='/soldHouses' className='navLink'>Sold Houses</Nav.Link>
                            </Nav>
                        </Card>
                    </Container>
                </Col>
                <Col xs={8}>
                    <HeaderDashboard title="Houses to Rent" />

                    <Container fluid>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                   <tr>
                                   <td>View</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                   </tr>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <tr>
                                   <td>View</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                   </tr>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <tr>
                                   <td>View</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                   </tr>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
export default HouseforRent