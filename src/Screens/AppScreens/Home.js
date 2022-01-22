import React from 'react';
import { Container, Card, Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import Image1 from '../../Images/Rectangle.jpg';
import Image2 from '../../Images/undraw_Letter_re_8m03 (2).png'
import '../../AppCss/home.css'
import Data from '../../Data/DumyData';
import { Link } from 'react-router-dom';
import { padding } from '@mui/system';

const Home = () => {
    const dummyData = Data;
    return (
        <Container>
            {/* Container 1 */}
            <Card className='Container1'>
                <Row>
                    <Col>
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
                    <Col>
                        <Card className='container1ImageLeft'>
                            <Card.Img src={Image1} />
                        </Card>
                    </Col>
                </Row>
            </Card>
            {/* Container 2 */}
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

                    <Col xs={6} md={4}>
                        <Card style={{ width: '20rem', marginTop: '30px' }}>
                            <Card.Img variant="top" src={house.imgUrl} />
                            <Card.Body style={{ display: 'flex' }}>
                                <p className='description'>{house.bedroom} BedRooms,</p>
                                <p className='description'>{house.bathroom} Bathrooms, </p>
                                <p className='description'>{house.toilete} Toiletes</p>
                                <p>&nbsp;&nbsp; ${house.price}.00</p>
                            </Card.Body>
                        </Card>
                    </Col>

                ))

                }
                <div className='mb-2'>
                    <Button size='lg'>Explorer</Button>
                </div>
            </Row>
            <Card style={{ marginTop: '10px', marginBottom: '40px' }}>
                <Card.Title style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', color: '#A16207', marginTop: '10px', marginBottom: '20px' }}>SEND US A MESSAGE</Card.Title>
                <Card>
                    <Row>
                        <Col>
                            <Card style={{ width: '100%', height: '100%',justfyConntent: 'center' }}>
                                <Card.Body style={{width:'70%'}}>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Names"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Mobile"
                                            aria-label="Mobile"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon2"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3" size='sm'>
                                        <FormControl
                                            placeholder='Password'
                                            aria-describedby="basic-addon3" />
                                    </InputGroup>
                                    <InputGroup>
                                        <FormControl
                                            as="textarea"
                                            aria-label="With textarea"
                                            placeholder='Message' />
                                    </InputGroup>
                                    <Button size='lg'>
                                        Send email
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
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