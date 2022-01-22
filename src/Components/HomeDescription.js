import React from 'react';
import { Card, Row, Col, Button} from 'react-bootstrap';
import Image1 from './../Images/Rectangle.jpg';
import Image2 from './../Images/Rectangle (2).jpg';
import Image3 from './../Images/Rectangle (1).jpg';
import '../AppCss/home.css'


const HomeDescription = () => {
    return (
        <Card>
            <Row>
                <Col>
                    <Card>
                        <Card.Title className='CardTitle'>
                            BUY  RENT SELL HOUSES ON THE GO
                        </Card.Title>
                        <Row>
                            <Col>
                                <Button>Explore</Button>
                            </Col>
                            <Col>
                                <Button>Book Appointment</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Img src={Image1}></Card.Img>
                            </Col>
                            <Col>
                                <Card.Img src={Image2}></Card.Img>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Img src={Image3}></Card.Img>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default HomeDescription;