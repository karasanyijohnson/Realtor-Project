import React from 'react'
import Header from '../component/Header';
import  Image  from '../component/Image/photo4.png';
import "./Login.css";
 function Login() {
    return (
      
    <div>
     < Header/>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required=""></input>
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required=""></input>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          </form>
          
        
      </div>
      <div className='phoo'>
          <img src={Image} alt='/photo4'/>
          </div>
    </div>
  );
}
   
export default Login;