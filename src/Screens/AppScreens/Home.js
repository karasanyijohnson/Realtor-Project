import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
const Home =()=>{
    return(
        <div>
            <h1>Home</h1>
            <Button>
              <Link to={'/dashboard'}>
               Ho dashboard
              </Link>

            </Button>
        </div>
    )
}
export default Home