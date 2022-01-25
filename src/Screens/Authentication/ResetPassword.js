import React from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';


const resetPassword = () => {
    return (
        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0px' }}>
            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '0px' }}>
                <Card.Text style={{ fontWeight: '400', fontSize: '48px', lineHeight: '60.24px', color: '#A16207' }}>Reset Password</Card.Text>
                <Card.Text style={{ fontWeight: '400', fontSize: '24px', lineHeight: '30px', color: 'rgba(0, 0, 0, 0.7)' }}>Please fill in your email and check a reset password link sent to that email</Card.Text>
                <InputGroup className='mb-3' >
                    <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        style={{ background: 'rgba(196, 196, 196, 0.05', color: '#C4C4C4', border: '1px solid #A16207', height: '68px' }}
                    />
                </InputGroup>
                <Button style={{ width: '70%', height: '68px', background: '#A16207', color: '#FFFFFF', borderRadius: '20px' }}>
                    Confirm Reset
                </Button>
            </Card>
        </Card>
    )
}
export default resetPassword;