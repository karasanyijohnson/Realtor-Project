import React from 'react';
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
  <div>
     <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
            <h5 class="text-md-right">REALTOR</h5>
                <div class="row">
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Product</a></li>
                            <li><a href="">Rental Houses</a></li>
                            <li><a href="">Sell Your House</a></li>
                            <li><a href="">2022 REALTOR</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                        <h5 class="text-md-right">SUPPORT</h5>
                            <li><a href="">privacy Policy</a></li>
                            <li><a href="">how we work</a></li>
                            <li><a href="">Book Appointment</a></li>
                        </ul>
                    </div>
                </div>
                <ul class="nav">
 <li class="nav-item"><a href="" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
 <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
 <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
 <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
 </ul>
<br/>
 </div>
            <div class="col-md-2">
 <h5 class="text-md-right">Connect With US:</h5>
 <hr/>
 <FaInstagram />
<FaLinkedin />
< FaYoutube />
<FaTwitter />
 </div>
 <div class="col-md-5">

 </div>
 </div>
    </div>
</footer>

  </div>
  )
}

export default Footer;
