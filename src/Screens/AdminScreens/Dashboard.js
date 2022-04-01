import React from 'react';
import { Container, Row, Col, Card, Button, Nav} from 'react-bootstrap'
import HeaderDashboard from '../../Components/Admin/HeaderDashboard';
import '../../AppCss/admin.css';
import { newHouseForSale, newHouseForRent } from '../../Data/DashboardData';
import { BsFillHouseFill } from 'react-icons/bs';
import {FiMenu} from 'react-icons/fi';

const Dashboard = () => {
  return (
    <Container fluid style={{ border: '1px solid' }}>
      <Row style={{ border: '1px solid red' }}>
        <Col style={{ border: '1px solid blue'}}>
        <Container style={{background:'#F5F5F5', height:'100%'}}>
            <Card style={{alignItems:'end', background:'#F5F5F5', border:'0px'}}>
              <Card.Title style={{marginTop:'20px', marginBottom:'20px',}}><FiMenu /></Card.Title>
            </Card>
            <Card style={{alignItems:'center',background:'#F5F5F5', border:'0px'}}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link active href="/dashboard" className='activeLink'>Dashboard</Nav.Link>
                    <Nav.Link href="/addHouse" className='navLink'>Add House</Nav.Link>
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
          <HeaderDashboard title="OverView" />
          <Card className='cardStatusContainer'>
            <Card className='BookedCardStatus'>
              <p><BsFillHouseFill style={{ color: 'green' }} /></p>
              <p>Booked</p>
              <p style={{ color: 'green' }}>3</p>
            </Card>
            <Card className='RentedCardStatus'>
              <p><BsFillHouseFill style={{ color: 'blue' }} /></p>
              <p>Rented</p>
              <p style={{ color: 'blue' }}>5</p>
            </Card>
            <Card className='onSaleCardStatus'>
              <p><BsFillHouseFill style={{ color: '#8A2BE2' }} /></p>
              <p>on Sale</p>
              <p style={{ color: '#8A2BE2' }}>30</p>
            </Card>
            <Card className='ToBeRentedCardStatus'>
              <p><BsFillHouseFill style={{ color: 'brown' }} /></p>
              <p>To be rented</p>
              <p style={{ color: 'brown' }}>80</p>
            </Card>
            <Card className='BoughtCardStatus'>
              <p><BsFillHouseFill style={{ color: '#A16207' }} /></p>
              <p>Bought</p>
              <p style={{ color: '#A16207' }}>100</p>
            </Card>
          </Card>
          <Container>
            <Card>
              <Row>
                <Col>
                  <Card className='overViewColumn'>
                    <Card className='CardTitleCotainer'>
                      <Card.Title className='CardTitle'>New Houses for Rent</Card.Title>
                    </Card>
                    {
                      newHouseForRent.map((location) =>
                        <Card className='LocationOverViewCard'>
                          {location.location.name}, {location.location.Street}
                          <Button className='ViewButton'>View</Button>
                        </Card>
                      )
                    }
                    <Card className='ViewMoreCardButton'>
                      <Button className='ViewMoreButton'>View More</Button>
                    </Card>
                  </Card>
                </Col>
                <Col>
                  <Card className='overViewColumn'>
                    <Card className='CardTitleCotainer'>
                      <Card.Title className='CardTitle'>New Houses for Sales</Card.Title>
                    </Card>
                    {
                      newHouseForSale.map((location) =>
                        <Card className='LocationOverViewCard'>
                          {location.location.name}, {location.location.Street}
                          <Button className='ViewButton'>View</Button>
                        </Card>
                      )
                    }
                    <Card className='ViewMoreCardButton'>
                      <Button className='ViewMoreButton'>View All</Button>
                    </Card>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
export default Dashboard