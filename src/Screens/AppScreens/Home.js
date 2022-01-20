import React from 'react';
import {Container,Card, Row, Col, Button} from 'react-bootstrap';
import HomeDescription from '../../Components/HomeDescription';
import '../../AppCss/home.css'
import Data from '../../Data/DumyData'

const Home =()=>{
    const dummyData= Data;
    return(
       <Container>
           {/* <HomeDescription/> */}
           <Card  className='categoriesHomeContainer'>
               <Card.Title className='categoriesTitle'>BROWSE</Card.Title>
               <Card.Body >
                   <Button className='buttonCategory'>All</Button>
                   <Button className='buttonCategory' >Buy</Button>
                   <Button className='buttonCategory'>Rent</Button>
                   <Button className='buttonCategory'>Sell</Button>
               </Card.Body>
               <Card.Body>
                   <Button className='filteredCategory'>Kigali Masaka</Button>
                   <Button className='filteredCategory'>Min Price</Button>
                   <Button className='filteredCategory'>Max Price</Button>
                   <Button className='filteredCategory'>Rent</Button>
                   <Button className='applyFilterButton'>Apply Filters</Button>
               </Card.Body>
           </Card>
            {dummyData.map((house)=>(
                       <Card className='CardPropertiesContainer'>
                            <Card.Body className='cardBodyProperties'>
                            <Card.Img className='cardBodyImage' src={house.imgUrl} alt='image'/>
                              <Row className='cardBodyDescriptions'>
                                  <Col style={{display:'flex'}}>
                                  <p className='description'>{house.bedroom} BedRooms ,</p>
                                  <p className='description'>{house.bathroom} Bathrooms ,</p>
                                  <p className='description'>{house.Toilete} Toiletes</p>
                                  </Col>
                                  <Col>
                                  <p className='PropertyPrice'>${house.price}.00</p>
                                  </Col> 
                              </Row>  
                            </Card.Body>
                       </Card>
               ))
               }
        
       </Container>
    )
}
export default Home