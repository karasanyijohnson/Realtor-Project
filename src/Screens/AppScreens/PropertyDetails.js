import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data/DumyData'
import { Card, Row, Col, Container, Button, ListGroup, Modal, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import { BsHeart, BsFillCircleFill, BsCalendarCheck } from 'react-icons/bs'
import { FaShare, FaBed, FaBath } from 'react-icons/fa'
import { RiCloseCircleLine } from 'react-icons/ri'
import { GiSpookyHouse } from 'react-icons/gi'
import { CgPiano } from 'react-icons/cg'
import { AiFillCar } from 'react-icons/ai'
import {BiRadioCircleMarked,BiRadioCircle} from 'react-icons/bi'
import MapImage from '../../Images/MapImage.PNG'
import SimilarImage1 from '../../Images/SimilarImage1.PNG'
import SimilarImage2 from '../../Images/SimilarImage2.PNG'
import MomoIcon from '../../Images/momo.PNG';
import MasterCardIcon from '../../Images/mastercard.PNG';
import AirTelIcon from '../../Images/airtel.PNG';
import '../../AppCss/PropertyDetail.css'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'

const PropertyDetails = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);
  const [showMarked, setMarked] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mouseEnter=()=>{
    setMarked(true)
  }
  const mouseLeave=()=>{
    showMarked(false)
  }
  useEffect(()=>{
    const timer= setTimeout(mouseLeave, 1000);
    return ()=>clearTimeout(timer);
  },[])
  const PropertyDetailId = useParams()
  const Id = PropertyDetailId.PropertyId
  const myData = Data;
  const PropertyDetail = myData.find((PropertyId) => PropertyId.id.toString() === Id)
  console.log(PropertyDetail)
  return (
    <Container >
      {/* <Header /> */}
      <Row className='mainRow'>
        <Col>
          <Card className='cardLeftColumn'>
            {PropertyDetail.houseImages.map(image => (
              <Card.Img className='cardImage' src={image.imageUrl}/>
            ))}
            <Card.Footer className='cardFooter'>
              <Button className='footerButton'>Take a Tour</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='cardRightColumn'>
            <Card.Header className='cardRightHeader'>
              <Row className='rowHeader'>
                <Col>
                  <p className='reactorText'>Realtor</p>
                </Col>
                <Col className='subColumn'>
                  <p><BsHeart className='subColumnIcon'/></p>
                  <p className='subColumnText'>Save</p>
                </Col>
                <Col className='subColumn'>
                  <p><FaShare className='subColumnIcon' /></p>
                  <p className='subColumnText'>Share</p>
                </Col>
                <Col>
                  <p><RiCloseCircleLine className='subColumnIcon' /></p>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Row className='amountRow'>
                <Col>
                  <p className='amount'>10,000,000 RWF</p>
                </Col>
                <Col>
                  <p className='roomDescr'>4bd | 1Ba | 3km</p>
                </Col>
                <p className='location'>Kigali, Masaka 15KG 453ST North East</p>
              </Row>
              <Card.Text className='cardText'>
                <p><BsFillCircleFill className='greenCircle'/></p>
                <p className='statusText'>For Sale</p>
              </Card.Text>
              <p className='estimatedPayment'>Estimated Rental Payment : 500,000 Rwf/month</p>
              <Row className='bookHouse'>
                <Button className='bookHouseButton' onClick={handleShow}>Book The House</Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Card className='cardHeaderModal'>
                      <Modal.Title className='cardHeaderModalTitle'>Book The House</Modal.Title>
                      <p className='attentionMessage'>Note that your schedule with our agent is  2 hours Max</p>
                    </Card>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='formLabel'>Name</Form.Label>
                        <Form.Control className='formControl' type="name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className='formLabel'>Phone</Form.Label>
                        <Form.Control className='formControl' type="phone" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Email</Form.Label>
                        <Form.Control className='formControl' type="email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='formLabel'>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Text className='FormText'>Select a date and time</Form.Text>
                      </Form.Group>
                      <Form.Group className='pickDateandTime'>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Pick Date"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          <TimePicker
                            label="Pick Time"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Form.Group>
                      <Form.Group>
                        <Form.Text className='FormText'>Payment</Form.Text>
                      </Form.Group>
                      <Form.Group>
                          <Card className='paymentContainer'>
                            <Card className='paymentCard'>
                            <Card className='cardIcon'>
                             {showMarked?<BiRadioCircleMarked/>:<BiRadioCircle/>}
                            </Card>
                            <Card>
                              <Card.Link href="#" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                              <Card.Img src={MomoIcon}/>
                              </Card.Link>
                            </Card>
                            </Card >
                            <Card className='paymentCard'>
                           <Card className='cardIcon'>
                           {showMarked?<BiRadioCircleMarked/>:<BiRadioCircle/>}
                             </Card>
                           <Card>
                             <Card.Link href='#' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                             <Card.Img src={MasterCardIcon}/>
                             </Card.Link>
                             </Card>
                            </Card>
                            <Card  className='paymentCard'>
                            <Card className='cardIcon'>
                            {showMarked?<BiRadioCircleMarked/>:<BiRadioCircle/>}
                              </Card>
                           <Card>
                            <Card.Link href='#' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <Card.Img src={AirTelIcon}/>
                            </Card.Link>
                           </Card>
                            </Card>
                          </Card>
                      </Form.Group>
                      <Form.Group>
                      <Form.Control className='formControl' type="number" placeholder='1500 RWF' />
                      </Form.Group>
                      <Form.Group>
                      <Form.Control className='formControl' type="phone" placeholder='Phone Number' />
                      </Form.Group>
                     <Card className='submitContainer'>
                     <Button variant="primary" type="submit" className='submitButton'>
                      Book the House
                      </Button>
                     </Card>
                    </Form>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Body>
            <Card style={{ height: '572px', border: '0px' }}>
              <Card.Img src={MapImage} style={{ height: '100%', width: '100%' }} />
            </Card>
            <Card style={{ border: '0px', marginTop: '20px' }}>
              <Card.Title
                style={{
                  fontSize: '30px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  lineHeight: '38px',
                  fontWeight: 'bold',
                  fontStyle: 'normal',
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
            <Card style={{ marginTop: '20px', marginBottom: '20px', border: '0px' }}>
              <Card.Title
                style={{
                  fontSize: '30px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  lineHeight: '38px',
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                }}
              >
                Features of the house
              </Card.Title>
              <Card.Body>
                <ListGroup.Item
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    width: '60%',
                    justifyContent: 'space-around',
                    border: '0px'
                  }}
                >
                  <p><GiSpookyHouse style={{ color: '#A16207', width: '36.88px', height: '36.88px' }} /></p>
                  <p>Single Family Residence</p>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    width: '50%',
                    justifyContent: 'space-around',
                    border: '0px'
                  }}
                >
                  <FaBed style={{ color: '#A16207', width: '36.88px', height: '36.88px' }} />
                  <p>4 Bedrooms</p>
                </ListGroup.Item >
                <ListGroup.Item
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    width: '50%',
                    justifyContent: 'space-around',
                    border: '0px'
                  }}
                >
                  <FaBath style={{ color: '#A16207', width: '36.88px', height: '36.88px' }} />
                  <p>2 Bathrooms</p>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    width: '60%',
                    justifyContent: 'space-around',
                    border: '0px'
                  }}
                >
                  <AiFillCar style={{ color: '#A16207', width: '36.88px', height: '36.88px' }} />
                  <p>2 Car Parking garage</p>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    width: '50%',
                    justifyContent: 'space-around',
                    border: '0px'
                  }}
                >
                  <CgPiano style={{ color: '#A16207', width: '36.88px', height: '36.88px' }} />
                  <p>1,343 Acres</p>
                </ListGroup.Item >
                <ListGroup.Item
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    width: '50%',
                    justifyContent: 'space-around',
                    border: '0px'
                  }}
                >
                  <BsCalendarCheck style={{ color: '#A16207', width: '36.88px', height: '36.88px' }} />
                  <p>Built In 2016</p>
                </ListGroup.Item>
              </Card.Body>
            </Card>
            <Card style={{ border: '0px' }}>
              <Card.Title
                style={{
                  fontSize: '30px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  lineHeight: '38px',
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  marginBottom: '30px'
                }}
              >Similar Homes
              </Card.Title>
              <Row>
                <Col>
                  <Card style={{ height: '400px' }}>
                    <Card.Img src={SimilarImage1} variant='top' style={{ height: '60%', width: '100%' }} />
                    <Card.Body
                      style={{
                        height: '30%',
                        background: '#F5F5F5',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '0px 0px 10px 10px'
                      }}
                    >
                      <Card.Title>12,000,000 rwf</Card.Title>
                      <Card.Text>3bd | 2ba | 1432 Sqft</Card.Text>
                      <Card.Text>Masaka, Kicukiro</Card.Text>
                      <Card.Text><BsFillCircleFill style={{ color: 'green' }} /> For sale</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ height: '400px' }}>
                    <Card.Img src={SimilarImage2} variant='top' style={{ height: '60%', width: '100%' }} />
                    <Card.Body
                      style={{
                        height: '30%',
                        background: '#F5F5F5',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '0px 0px 10px 10px'
                      }}
                    >
                      <Card.Title>12,000,000 rwf</Card.Title>
                      <Card.Text>3bd | 2ba | 1432 Sqft</Card.Text>
                      <Card.Text>Masaka, Kicukiro</Card.Text>
                      <Card.Text><BsFillCircleFill style={{ color: 'green' }} /> For sale</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Card.Footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                <Button
                  style={{
                    background: '#A16207',
                    borderRadius: '10px',
                    width: '90%',
                    height: '72px',
                    fontSize: '30px',
                    lineHeight: '50px',
                    fontWeight: 'bold'
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