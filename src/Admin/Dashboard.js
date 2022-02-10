import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import Sidebar from '../Components/Admin/Sidebar';
import Header from '../Components/Admin/Header';
import OverviewCard from '../Components/Admin/OverviewCard';
import ColumnDashboard from '../Components/Admin/ColumnDashboard';

const Dashboard = () => {
  return (
    <Container fluid style={{ border: '1px solid' }}>
      <Row style={{ border: '1px solid red' }}>
        <Col style={{ border: '1px solid blue' }}>
          <Sidebar />
        </Col>
        <Col xs={8} style={{ border: '1px solid grey' }}>
          <Header />
          <Card style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
          </Card>
          <Container>
            <Card>
            <Row>
              <Col><ColumnDashboard/></Col>
              <Col><ColumnDashboard/></Col>
            </Row>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
export default Dashboard