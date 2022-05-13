import React from 'react';
import { Container, Card,} from 'react-bootstrap';
import Image from '../../Images/avatar.jpg';
import '../../AppCss/admin.css'

const Header = (props) => {
    return (
        <Container fluid>
            <Card className='HeaderContainer'>
                <Card className='HeaderContent'>
                    <Card.Title className='HeaderContentTitle'>{props.title}</Card.Title>
                    <Card.Img src={Image} style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                </Card>
            </Card>
        </Container>
    )
}
export default Header