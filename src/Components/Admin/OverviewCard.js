import React from 'react';
import { Card } from 'react-bootstrap';
import {BsFillHouseFill} from 'react-icons/bs'

const OverviewCard=(props)=>{
    return(
        <Card style={{justifyContent:'center', alignItems:'center', width:'15%'}}>
            <p><BsFillHouseFill/></p>
            <p>{props.status}</p>
            <p>{props.number}</p>
        </Card>
    )
}

export default OverviewCard