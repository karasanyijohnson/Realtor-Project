import React from 'react'
import Header from './Header'
import houses1 from '../component/Image/houses1.JPG';
import "./Event.css";

function Event() {
    return (
        <div>
  < Header/> 
  <div className='btn__button1'>
  <div className='button1'><button  type='submit'>ALL</button></div>
       <div className='button1'><button  type='submit'>BUY</button></div>
        <div className='button1'> <button  type='submit'>SELL</button></div>
        <div className='button1'>  <button type='submit'>RENT</button></div>
        </div>
    <div className='btn__button2'>
  <div className='button2'><button  type='submit'>Kigali Masaka</button></div>
       <div className='button2'><button  type='submit'>Min Price</button></div>
        <div className='button2'> <button  type='submit'>Max Price</button></div>
        <div className='button2'>  <button type='submit'>Rent</button></div>
        <div className='button2'>  <button type='submit'>Apply Filter</button></div>
        </div><br/>
<div className='btn__houses1'> <img src={houses1} alt="/houses" />
        </div>
        </div>
        
       
    )
}

export default Event
