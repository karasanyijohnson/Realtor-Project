import React from 'react';
import { Card } from 'react-bootstrap';

const OverviewCard=(props)=>{
    return(
        <Card style={{justifyContent:'center', alignItems:'center', width:'15%'}}>
            <p>{props.icon}</p>
            <p>{props.status}</p>
            <p>{props.number}</p>
        </Card>
    )
}

export default OverviewCard