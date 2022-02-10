import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Container fluid>
            <Card style={{ border: '1px solid', width: '100%', alignItems: 'end' }}>
                <Card style={{ width: '70%', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Card>Over View</Card>
                    <Card>Profile</Card>
                </Card>
            </Card>
        </Container>
    )
}
export default Header