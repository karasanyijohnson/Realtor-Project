import React from 'react';
import {Card, Row, Col,Button} from 'react-bootstrap';

const ColumnDashboard =(props)=>{
    return(
        <Card className='ColumnDashboard'>
         {props.title}
         <Card style={{flexDirection:'row', justifyContent:'space-around'}}>
             <p>{props.location}</p>
             <Button>View</Button>
         </Card>
        </Card>
    )
}

export default ColumnDashboard