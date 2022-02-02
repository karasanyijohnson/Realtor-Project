import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import '../Input/inPutField.css'

const inPutField = (props) => {
    return (
        <InputGroup className="input_container">
            <FormControl
                placeholder={props.placeholder}
                aria-label={props.label}
                aria-describedby={props.describedby}
                type={props.type}
                className='formControl_Input'
            />
        </InputGroup>
    )
}

export default inPutField
