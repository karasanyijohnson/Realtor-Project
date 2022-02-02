import React from 'react'
import Header from '../component/Header';
import Image  from '../component/Image/photo5.png';
import  "./Contact.css";
function Contact() {
    return (
 <div>
    < Header/>
<div>    
    <div className='form__parents'>
        <h3>SEND US MESSAGE</h3>
    </div>
    <div className='bdy__container'>        
    <div className='btn__send'> 
    
<input className="placeh"type="text"  name="fname" placeholder='Names'/><br/>
<input className="placeh"type="text"  name="MOBILE PHONE" placeholder='Mobile'/><br/>
<input className="placeh"type="email"  name="email" placeholder=' Email'/><br/>
<textarea className="placeh" placeholder="Message"> </textarea><br/>
<input className="placehold" type="submit" value="SEND MESSAGE" placeholder='Message'/><br/>
 </div>
    <div className='pht__image'> 
       <img className='photo5'src={Image} alt="/photo5" /> 
    </div>
   
    </div>
  </div>
 </div> 
  
    )
}

export default Contact
