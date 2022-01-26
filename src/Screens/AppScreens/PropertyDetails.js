import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data/DumyData'
import { Card,Row,Col, Container, Button,ListGroup} from 'react-bootstrap';
import {BsHeart,BsFillCircleFill,BsCalendarCheck} from 'react-icons/bs'
import {FaShare,FaBed,FaBath} from 'react-icons/fa'
import {RiCloseCircleLine} from 'react-icons/ri'
import {GiSpookyHouse} from 'react-icons/gi'
import {CgPiano} from 'react-icons/cg'
import {AiFillCar} from 'react-icons/ai'
import MapImage from '../../Images/MapImage.PNG'

const PropertyDetails=()=>{
    const PropertyDetailId= useParams()
    const Id= PropertyDetailId.PropertyId
    const myData = Data;
    const PropertyDetail = myData.find((PropertyId)=>PropertyId.id.toString()===Id)
    console.log(PropertyDetail)
    return(
      <Container>
          <Row style={{marginTop:'50px', marginBottom:'50px'}}>
          <Col>
          <Card>
           {PropertyDetail.houseImages.map(image=>(
             <Card.Img src={image.imageUrl}/>
           ))}
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Header style={{background:'white'}}>
              <Row style={{justifyContent:'center', alignItems:'center'}}>
                <Col>
                <p style={{color:'#A16207', fontSize:'30px', lineHeight:'38px', fontWeight:'800'}}>Realtor</p>
                </Col>
                <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p><BsHeart style={{color:'#A16207', width:'30px', height:'30px'}}/></p>
                <p style={{fontSize:'18px', lineHeight:'23px',marginLeft:'10px'}}>Save</p>
                </Col>
                <Col style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <p><FaShare  style={{color:'#A16207',width:'30px', height:'30px'}}/></p>
                <p style={{fontSize:'18px', lineHeight:'23px', marginLeft:'10px' }}>Share</p>
                </Col>
                <Col>
                <p><RiCloseCircleLine style={{color:'#A16207',width:'30px', height:'30px'}}/></p>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body style={{height:'400px'}}>
              <Row style={{justifyContent:'center', alignItems:'center'}}>
                <Col>
                <p style={{color:'#A16207', fontSize:'30px', lineHeight:'38px', fontWeight:'bold'}}>10,000,000 RWF</p>
                </Col>
                <Col>
                <p style={{color:'#000000', fontSize:'20px', lineHeight:'25px', fontWeight:'500'}}>4bd | 1Ba | 3km</p>
                </Col>
                <p style={{color:'#000000', fontSize:'24px', lineHeight:'30px', fontWeight:'normal'}}>Kigali, Masaka 15KG 453ST North East</p>
              </Row>
              <Card.Text style={{display:'flex',alignItems:'center'}}>
                <p><BsFillCircleFill style={{color:'green'}}/></p>
                <p style={{color:'rgba(161, 98, 7, 0.7)',fontSize:'24px', lineHeight:'30px', fontWeight:'bold', marginLeft:'10px'}}>For Sale</p>
              </Card.Text>
              <p style={{color:'rgba(0, 0, 0, 0.8)',fontSize:'20px', lineHeight:'25px', fontWeight:'normal'}}>Estimated Rental Payment : 500,000 Rwf/month</p>
             <Row style={{display:'flex', justifyContent:'center',}}>
             <Button style={{background:'#A16207', width:'55%',height:'70px', borderRadius:'10px',fontSize:'24px', lineHeight:'30px',fontWeight:'500',}}>Book The House</Button>
             </Row>
            </Card.Body>
            <Card style={{height:'572px'}}>
              <Card.Img src={MapImage} style={{height:'100%', width:'100%'}}/>
            </Card>
            <Card>
              <Card.Title>Overview</Card.Title>
              <Card.Text>Time on Realtor : 8 Days | Views 192 | Saves 180</Card.Text>
              <Card.Body>
                <Card.Text>
                Charming ranch style home in North White Plains waiting for you to make it your own and
                 restore to it's former glory.   This three bedroom, one full bath offers a large and
                  open living room. There is easy access to the deck from the formal dining room, 
                  that overlooks the spacious backyard, which is also great for entertaining.
                   There is also the laundry room/pantry off the kitchen and walkout to private 
                   backyard as well. There is an attached garage along with the driveway for ample parking.
                    Very short distance to North White Plains Metro North. In need of a some TLC.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title>Features of the house</Card.Title>
              <Card.Body>
                <ListGroup.Item style={{display: "flex"}}>
                  <GiSpookyHouse/>
                  <p>Single Family Residence</p>
               </ListGroup.Item>
               <ListGroup.Item style={{display: "flex"}}>
                   <FaBed/>
                  <p>4 Bedrooms</p>
               </ListGroup.Item>
               <ListGroup.Item style={{display: "flex"}}>
                 <FaBath/>
                  <p>2 Bathrooms</p>
               </ListGroup.Item>
               <ListGroup.Item style={{display: "flex"}}>
                  <AiFillCar/>
                  <p>2 Car Parking garage</p>
               </ListGroup.Item>
               <ListGroup.Item style={{display: "flex"}}>
                <CgPiano/>
                  <p>1,343 Acres</p>
               </ListGroup.Item>
               <ListGroup.Item style={{display: "flex"}}>
                  <BsCalendarCheck/>
                  <p>Built In 2016</p>
               </ListGroup.Item>
              </Card.Body>
            </Card>
          </Card>
          </Col>
        </Row>
     
      </Container>
    )
}

export default PropertyDetails