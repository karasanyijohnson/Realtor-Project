import React from 'react'
import  "./Register.css";
import Image from '../component/Image/photo3.png'
import Header from '../component/Header';
 function Register() {
    return (     
        <div> 
         <Header/>
         <div className='cont'>
          <div className='leftSide'>
            <form>
            <h1 class='headerOne'>Register Here</h1>
                      
<div>
  <p>Please fill in the details to create an account with us.</p>
  <hr />
  <label htmlFor="email"><b>Enter Email</b></label>
  <input type="text" placeholder="Enter Email" name="email" required />
  <label htmlFor="pwd"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="pwd" />
  <label htmlFor="confirm"><b>Confirm Password</b></label>
  <input type="password" placeholder="Confirm Password" name="confirm" />
  <hr />
  <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
  <button type="submit" className="registerbtn"><strong>Register</strong></button>
  <div className="container signin">
    <p>Already have an account? <a href="Login">Sign in</a>.</p>
  </div>
</div>
</form>
</div>
<div className='rightSide'>
<img src={Image} width={900} height={500} />
</div>
</div> 
        </div>
    );
}
export default Register