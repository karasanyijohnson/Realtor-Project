import React from 'react';
import { Container, Row, Col, Nav, Card, Form, Button} from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import HeaderDashboard from '../../Components/Admin/HeaderDashboard';
import '../../AppCss/sidebarAdminPage.css'
import '../../AppCss/addHouse.css'

const AddHouse = () => {
    return (
        <Container fluid style={{ border: '1px solid' }}>
            <Row style={{ border: '1px solid red' }}>
                <Col style={{ border: '1px solid blue' }}>
                    <Container style={{ background: '#F5F5F5', height: '100%' }}>
                        <Card style={{ alignItems: 'end', background: '#F5F5F5', border: '0px' }}>
                            <Card.Title style={{ marginTop: '20px', marginBottom: '20px', }}><FiMenu /></Card.Title>
                        </Card>
                        <Card style={{ alignItems: 'center', background: '#F5F5F5', border: '0px' }}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link active href="/dashboard" className='navLink'>Dashboard</Nav.Link>
                                <Nav.Link href="/addHouse" className='activeLink'>Add House</Nav.Link>
                                <Nav.Link href='/editHouse' className='navLink'>Edit House</Nav.Link>
                                <Nav.Link href='/housesToRent' className='navLink'>Houses To Rent</Nav.Link>
                                <Nav.Link href='/housesOnSale' className='navLink'>Houses On Sale</Nav.Link>
                                <Nav.Link href='/bookedHouses' className='navLink'>Booked Houses</Nav.Link>
                                <Nav.Link href='/rentedHouses' className='navLink'>Rented Houses</Nav.Link>
                                <Nav.Link href='/soldHouses' className='navLink'>Sold Houses</Nav.Link>
                            </Nav>
                        </Card>
                    </Container>
                </Col>
                <Col xs={8} style={{ border: '3px solid grey' }}>
                    <HeaderDashboard title="Add House" />
                    <Container><p>The field labels marked with * are required input fields.</p></Container>
                    <Container fluid>
                        <Card>
                            <Row>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>House name</Form.Label>
                                <Form.Control type="text" placeholder="Masaka Kicukiro 345 KG ST 32" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>House Code</Form.Label>
                                <Form.Control type="number" placeholder="House ID" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>District</Form.Label>
                                <Form.Control type="text" placeholder="Kicukiro" />
                                </Form.Group>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Number of Bedrooms</Form.Label>
                                <Form.Control type="number" placeholder="4" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Number of Bathrooms</Form.Label>
                                <Form.Control type="number" placeholder="3" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>House for what?</Form.Label>
                                <Form.Select aria-label="Default select example">
                                <option value="1">Rent</option>
                                <option value="2">Buy</option>
                                <option value="3">Three</option>
                                </Form.Select>
                                </Form.Group>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Owner </Form.Label>
                                <Form.Control type="text" placeholder="Miss Teta Kirezi Nada" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Sector</Form.Label>
                                <Form.Control type="text" placeholder="Masaka" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Cell</Form.Label>
                                <Form.Control type="text" placeholder="Cyimo" />
                                </Form.Group>
                                </Col>
                            </Row>
                        </Card>
                        <Card>1</Card>
                        <Card>
                            <Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>House Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="House Description"/>
                        </Form.Group>
                            </Row>
                        </Card>
                        <Card style={{justifyContent:'center', alignItems:'center'}}>
                            <Button type='submit' className='submitButton'>Submit</Button>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
export default AddHouse