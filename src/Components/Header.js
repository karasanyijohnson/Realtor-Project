
import React from 'react';
import { Button, Card, Row, Col,} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import '../AppCss/header.css'


const Header = () => {
    // const navigate = useNavigate();
    return (
        <Card className='headerContainer'>
            <Row>
                <Col className='locationHeader'>
                    <p>Kigali, Rwanda &nbsp;&nbsp;</p>
                    <p>+ 250 7811 111 111</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ border: '0px' }}>
                        <h1 style={{ color: '#A16207' }}>Reactor</h1>
                    </Card>
                </Col>
                <Col>
                    <Card className='headerRight'>
                        <Card.Link href="#">
                            <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>Home</Link>
                        </Card.Link>
                        <Card.Link href="#">About</Card.Link>
                        <Card.Link href="#">Contact</Card.Link>
                        <Card.Link href="#">Events</Card.Link>
                        <Button className='loginButton' size='lg'>
                            <Link to='/login' style={{ textDecoration: 'none', color: '#000000' }}>Login</Link>
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Card>

    )
}

export default Header;
