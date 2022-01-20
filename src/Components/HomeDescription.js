import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import Image1 from './../Images/Rectangle.jpg';
import Image2 from './../Images/Rectangle (2).jpg';
import Image3 from './../Images/Rectangle (1).jpg';



const HomeDescription =()=>{
    return(
        <Card>
           <Row style={{display:'flex',widht:'98%', marginLeft:'10px'}}>
               <Col style={{border:'1px solid', width:'50%'}}>
                  <Card>
                      <Card.Text>
                      BUY  RENT SELL HOUSES ON THE GO
                      </Card.Text>
                      <Card.Body>
                          <Button>Explorer</Button>
                          <Button>Book Appointment</Button>
                      </Card.Body>
                  </Card>
                </Col>
               <Col style={{border:'1px solid', width:'50%'}}>
               <Card style={{diplay:'flex'}}>
               <Card style={{display:'flex',width:'578px',height:'416px', background:'green',justifyContent:'center', alignItems:'center'}}>
                    <Card.Img src={Image1} style={{width:'50%'}}></Card.Img>
                </Card>
                <Card style={{display:'flex',width:'578px',height:'416px', background:'grey', justifyContent:'center',alignItems:'center'}}>
                    <Card.Img src={Image2} style={{width:'50%',height:'50%'}}></Card.Img>
                </Card>
               </Card>
               <Card style={{display:'flex',width:'578px', height:'416px', justifyContent:'center', alignItems:'center', background:'yellow'}}>
               <Card.Img src={Image3} style={{width:'50%' ,height:'50%'}}></Card.Img>
               </Card>
               </Col>
           </Row>
           </Card>
    )
}

export default HomeDescription;