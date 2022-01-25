import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data/DumyData'

const PropertyDetails=()=>{
    const PropertyDetailId= useParams()
    let Id= PropertyDetailId.PropertyId
    console.log(Id)

    const myData = Data;
    console.log(myData)
    const PropertyDetail = myData.find((PropertyId)=>PropertyId.id===Id)
    console.log(PropertyDetail)
    return(
        <h1>PropertyDetails</h1>
    )
}

export default PropertyDetails