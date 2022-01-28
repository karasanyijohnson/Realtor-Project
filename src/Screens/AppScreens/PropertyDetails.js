import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data/DumyData'
import { Card,Row,Col, Container, Button,ListGroup, CardGroup} from 'react-bootstrap';
import {BsHeart,BsFillCircleFill,BsCalendarCheck} from 'react-icons/bs'
import {FaShare,FaBed,FaBath} from 'react-icons/fa'
import {RiCloseCircleLine} from 'react-icons/ri'
import {GiSpookyHouse} from 'react-icons/gi'
import {CgPiano} from 'react-icons/cg'
import {AiFillCar} from 'react-icons/ai'
import MapImage from '../../Images/MapImage.PNG'
import SimilarImage1 from '../../Images/SimilarImage1.PNG'
import SimilarImage2 from '../../Images/SimilarImage2.PNG'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'

const PropertyDetails=()=>{
    const PropertyDetailId= useParams()
    const Id= PropertyDetailId.PropertyId
    const myData = Data;
    const PropertyDetail = myData.find((PropertyId)=>PropertyId.id.toString()===Id)
    console.log(PropertyDetail)
    return(
      <Container fluid>
        <Header/>
          <Row style={{marginTop:'50px', marginBottom:'50px'}}>
          <Col>
          <Card style={{border:'0px'}}>
           {PropertyDetail.houseImages.map(image=>(
             <Card.Img src={image.imageUrl} style={{padding:'10px'}}/>
           ))}
           <Card.Footer 
           style={{
             display:'flex',
             justifyContent:'center', 
             alignItems:'center', 
             background:'white',
             border:'0px'
             }}
             >
                <Button 
                style={{
                  background:'#A16207',
                   borderRadius:'10px',
                   width:'90%', 
                   height:'72px',
                    fontSize:'30px', 
                    lineHeight:'50px',
                     fontWeight:'bold'
                     }}
                     >
                       Take a Tour
                       </Button>
              </Card.Footer>
          </Card>
          </Col>
          <Col>
          <Card style={{border:'0px'}}>
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
            <Card style={{height:'572px', border:'0px'}}>
              <Card.Img src={MapImage} style={{height:'100%', width:'100%'}}/>
            </Card>
            <Card style={{border:'0px', marginTop:'20px'}}>
              <Card.Title
              style={{
                fontSize:'30px', 
                color:'rgba(0, 0, 0, 0.7)', 
                lineHeight:'38px',
                fontWeight:'bold', 
                fontStyle:'normal',
                }} 
              >
                Overview
                </Card.Title>
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
            <Card style={{marginTop:'20px', marginBottom:'20px', border:'0px'}}>
              <Card.Title 
              style={{
                fontSize:'30px', 
                color:'rgba(0, 0, 0, 0.7)', 
                lineHeight:'38px',
                fontWeight:'bold', 
                fontStyle:'normal',
                }}
              >
                Features of the house
                </Card.Title>
              <Card.Body>
                <ListGroup.Item 
                style={{
                  display: "flex",
                  alignItems:'center',
                   width:'60%',
                    justifyContent:'space-around', 
                    border:'0px'
                  }}
                    >
                  <p><GiSpookyHouse style={{color:'#A16207', width:'36.88px', height:'36.88px'}}/></p>
                  <p>Single Family Residence</p>
               </ListGroup.Item>
               <ListGroup.Item 
               style={{
                 display: "flex",
                 alignItems:'center',
                  width:'50%', 
                  justifyContent:'space-around',
                   border:'0px'
                   }}
                   >
                   <FaBed style={{color:'#A16207',width:'36.88px', height:'36.88px'}}/>
                  <p>4 Bedrooms</p>
               </ListGroup.Item >
               <ListGroup.Item 
               style={{display: "flex",
               alignItems:'center', 
               width:'50%', 
               justifyContent:'space-around',
                border:'0px'
                }}
                >
                 <FaBath style={{color:'#A16207', width:'36.88px', height:'36.88px'}}/>
                  <p>2 Bathrooms</p>
               </ListGroup.Item>
               <ListGroup.Item 
               style={{
                 display: "flex",
                 alignItems:'center', 
                 width:'60%', 
                 justifyContent:'space-around',
                  border:'0px'
                  }}
                  >
                  <AiFillCar style={{color:'#A16207', width:'36.88px', height:'36.88px'}}/>
                  <p>2 Car Parking garage</p>
               </ListGroup.Item>
               <ListGroup.Item 
               style={{
                 display: "flex",
                 alignItems:'center', 
                 width:'50%', 
                 justifyContent:'space-around', 
                 border:'0px'
                 }}
                 >
                <CgPiano style={{color:'#A16207', width:'36.88px', height:'36.88px'}}/>
                  <p>1,343 Acres</p>
               </ListGroup.Item >
               <ListGroup.Item 
               style={{display: "flex",
               alignItems:'center',
                width:'50%', 
                justifyContent:'space-around',
                 border:'0px'
                 }}
                 >
                  <BsCalendarCheck style={{color:'#A16207', width:'36.88px', height:'36.88px'}}/>
                  <p>Built In 2016</p>
               </ListGroup.Item>
              </Card.Body>
            </Card>
             <Card style={{border:'0px'}}>
             <Card.Title 
             style={{
               fontSize:'30px', 
               color:'rgba(0, 0, 0, 0.7)', 
               lineHeight:'38px',
               fontWeight:'bold', 
               fontStyle:'normal',
               marginBottom:'30px'
               }}
               >Similar Homes
               </Card.Title>
             <Row>
              <Col>
              <Card style={{height:'400px'}}>
                <Card.Img src={SimilarImage1} variant='top' style={{height:'60%', width:'100%'}}/>
              <Card.Body 
              style={{
                height:'30%',
                 background:'#F5F5F5',
                  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                   borderRadius:'0px 0px 10px 10px'
                   }}
                   >
                <Card.Title>12,000,000 rwf</Card.Title>
                <Card.Text>3bd | 2ba | 1432 Sqft</Card.Text>
                <Card.Text>Masaka, Kicukiro</Card.Text>
                <Card.Text><BsFillCircleFill style={{color:'green'}}/> For sale</Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{height:'400px'}}>
              <Card.Img src={SimilarImage2} variant='top' style={{height:'60%', width:'100%'}}/>
              <Card.Body 
              style={{
                height:'30%', 
                background:'#F5F5F5',
                 boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius:'0px 0px 10px 10px'
                  }}
                  >
                <Card.Title>12,000,000 rwf</Card.Title>
                <Card.Text>3bd | 2ba | 1432 Sqft</Card.Text>
                <Card.Text>Masaka, Kicukiro</Card.Text>
                <Card.Text><BsFillCircleFill style={{color:'green'}}/> For sale</Card.Text>
                </Card.Body>
              </Card>
              </Col>
              </Row>
              <Card.Footer style={{display:'flex',justifyContent:'center', alignItems:'center', background:'white'}}>
                <Button 
                style={{
                  background:'#A16207',
                   borderRadius:'10px',
                   width:'90%', 
                   height:'72px',
                    fontSize:'30px', 
                    lineHeight:'50px',
                     fontWeight:'bold'
                     }}
                     >
                       View More
                       </Button>
              </Card.Footer>
             </Card>
            </Card>
          </Col>
        </Row>
        {/* <Footer/> */}
      </Container>
    )
}

export default PropertyDetails