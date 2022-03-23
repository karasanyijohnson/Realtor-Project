import React from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap'
import Sidebar from '../../Components/Admin/Sidebar';
import HeaderDashboard from '../../Components/Admin/HeaderDashboard';
import OverviewCard from '../../Components/Admin/OverviewCard';
import '../../AppCss/admin.css';
import {newHouseForSale,newHouseForRent} from '../../Data/DashboardData'

const Dashboard = () => {
  return (
    <Container fluid style={{ border: '1px solid' }}>
      <Row style={{ border: '1px solid red' }}>
        <Col style={{ border: '1px solid blue' }}>
          <Sidebar />
        </Col>
        <Col xs={8} style={{ border: '3px solid grey' }}>
          <HeaderDashboard title="OverView"/>
          <Card className='cardStatusContainer'>
            <OverviewCard status="Booked" number="3"/>
            <OverviewCard status="Rented" number="5"/>
            <OverviewCard status="on Sale" number="30"/>
            <OverviewCard status="To be rented" number="80"/>
            <OverviewCard status="Bought" number="100"/>
          </Card>
          <Container>
            <Card>
            <Row>
              <Col>
               <Card className='overViewColumn'>
               <Card style={{justifyContent:'center', alignItems:'center'}}>
               <Card.Title >New Houses for Rent</Card.Title>
               </Card>
               {
                newHouseForRent.map((location)=>
                <Card style={{flexDirection:'row', justifyContent:'space-around'}}>
                {location.location.name}, {location.location.Street}
                <Button>View</Button>
                </Card>
                )
              }
               </Card>
              </Col>
              <Col>
              <Card className='overViewColumn'>
              <Card style={{justifyContent:'center', alignItems:'center'}}>
              <Card.Title>New Houses for Sales</Card.Title>
              </Card>
               {
                newHouseForSale.map((location)=>
                <Card style={{flexDirection:'row', justifyContent:'space-around'}}>
                {location.location.name}, {location.location.Street}
                <Button>View</Button>
                </Card>
                )
              }
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