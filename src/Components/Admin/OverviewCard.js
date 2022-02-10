import React from 'react';
import { Card } from 'react-bootstrap';
import {BsFillHouseFill} from 'react-icons/bs'

const OverviewCard=()=>{
    return(
        <Card style={{justifyContent:'center', alignItems:'center', width:'15%'}}>
            <p><BsFillHouseFill/></p>
            <p>Booked</p>
            <p>3</p>
        </Card>
    )
}

export default OverviewCard