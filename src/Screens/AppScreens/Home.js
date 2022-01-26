import React from 'react';
import { Container, Card, Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import Image1 from '../../Images/3D Images.svg';
import Image2 from '../../Images/undraw_Letter_re_8m03 (2).png'
import '../../AppCss/home.css'
import Data from '../../Data/DumyData';

const Home = () => {
    const dummyData = Data;
    const navigate= useNavigate()
    return (
        <Container>
            {/* Container 1 */}
            <Card className='Container1'>
                <Row>
                    <Col style={{height:'416px'}}>
                        <Card className='buyRentCard'>
                            <Card className='CardText'>
                                BUY  RENT <br /> SELL HOUSES<br /> ON THE GO
                            </Card>
                            <Row className='buttonsContainer'>
                                <Col>
                                    <Button size='lg' className='exploreButton'>Explore</Button>
                                </Col>
                                <Col>
                                    <Button size='lg' className='BookAppointmentButton'>Book Appointment</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col style={{height:'416px'}}>
                        <Card className='container1ImageLeft'>
                            <Card.Img src={Image1} style={{height:'100%'}} />
                        </Card>
                    </Col>
                </Row>
            </Card>
            {/* ================================================================================================ */}
            {/* Propeties Section */}
            <Card className='categoriesHomeContainer'>
                <Card.Title className='categoriesTitle'>BROWSE</Card.Title>
                <Card.Body >
                    <Button className='buttonCategory'>All</Button>
                    <Button className='buttonCategory' >Buy</Button>
                    <Button className='buttonCategory'>Rent</Button>
                    <Button className='buttonCategory'>Sell</Button>
                </Card.Body>
                <Card.Body>
                    <Button className='filteredCategory'>Kigali Masaka</Button>
                    <Button className='filteredCategory'>Min Price</Button>
                    <Button className='filteredCategory'>Max Price</Button>
                    <Button className='filteredCategory'>Rent</Button>
                    <Button className='applyFilterButton'>Apply Filters</Button>
                </Card.Body>
            </Card>
            <Row >
                {dummyData.map((house) => (

                    <Col xs={6} md={4} key={house.id}>
                        <Card style={{ width: '23rem', marginTop: '30px' }} onClick={(id)=>{
                            console.log(`yes id: ${house.id}`)
                            navigate(`/${house.id}`)
                        }}>
                            <Card.Img variant="top" src={house.houseImages[0].imageUrl} />
                            <Row style={{background:'rgba(196, 196, 196, 0.2)',width:'100%', boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25',borderRadius:'0px 0px 10px 10px',margin:'2px'}}>
                                <Col xs={8}>
                                <Row>
                                    <p className='description'>{house.bedroom}BedRooms,{house.bathroom} Bathrooms,{house.toilete} Toiletes</p>
                                </Row>
                                <Col>
                               <Row>
                               <p className='description'>{house.location}</p>
                               </Row>
                                </Col>
                                </Col>
                                <Col >
                                <p style={{color:'rgba(0, 0, 0, 0.7)', fontSize:'14px', fontWeight:'bold'}}>$ {house.price}.00</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                ))

                }
            </Row>
            {/* ======================================================================================================================= */}
            {/* Explorer Button Section */}
            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px', border: '0px' }}>
                <Button style={{ height: '56px', width: '239px', background: 'rgba(161, 98, 7, 0.2)', border: '1px solid #A16207', borderRadius: '10px', color: '#A16207', fontSize: '23px', fontWeight: '600' }}>Explore</Button>
            </Card>
            <Card style={{ marginTop: '10px', marginBottom: '40px', border: '0px' }}>
                <Card.Title style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', color: '#A16207', padding: '30px', fontSize: '30px', fontWeight: 'bold' }}>SEND US A MESSAGE</Card.Title>
                <Card style={{ border: '0px' }}>
                    <Row>
                        <Col style={{ height: '625px' }}>
                            <Card style={{ height: '100%', padding: '20px', background: 'rgba(161, 98, 7, 0.02)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                                <InputGroup className="mb-3" style={{ width: '100%', height: '74px' }}>
                                    <FormControl
                                        placeholder="Names"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        style={{ width: '100%', height: '68px', background: ' rgba(253, 201, 33, 0.03)', border: ' 2px solid #A16207', borderRadius: '10px' }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3" style={{ width: '100%', height: '74px' }}>
                                    <FormControl
                                        placeholder="Mobile"
                                        aria-label="Mobile"
                                        aria-describedby="basic-addon1"
                                        style={{ width: '100%', height: '68px', background: ' rgba(253, 201, 33, 0.03)', border: ' 2px solid #A16207', borderRadius: '10px' }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3" style={{ width: '100%', height: '74px' }}>
                                    <FormControl
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon2"
                                        style={{ width: '100%', height: '68px', background: ' rgba(253, 201, 33, 0.03)', border: ' 2px solid #A16207', borderRadius: '10px' }}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3" style={{ width: '100%', height: '74px' }}>
                                    <FormControl
                                        placeholder='Password'
                                        aria-describedby="basic-addon3"
                                        style={{ width: '100%', height: '68px', background: ' rgba(253, 201, 33, 0.03)', border: ' 2px solid #A16207', borderRadius: '10px' }}
                                    />
                                </InputGroup>
                                <InputGroup style={{ width: '100%', height: '155px' }}>
                                    <FormControl
                                        as="textarea"
                                        aria-label="With textarea"
                                        placeholder='Message'
                                        style={{ width: '100%', height: '155px', background: ' rgba(253, 201, 33, 0.03)', border: ' 2px solid #A16207', borderRadius: '10px' }}
                                    />
                                </InputGroup>
                                <Button style={{ width: '100%', height: '76px', border: '2px solid #A16207', borderRadius: '100px', background: '#FFFFFF', color: '#A16207', fontSize: '25px', marginTop: '10px', fontWeight: '600' }}>
                                    SEND MESSAGE
                                </Button>
                            </Card>
                        </Col>
                        <Col style={{ height: '625px' }}>
                            <Card style={{ height: '100%', border: '0px' }}>
                                <Card.Img src={Image2} />
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Card>

        </Container>
    )
}
export default Home