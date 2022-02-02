import React, { Component } from "react";
import Image7 from "../component/Image/photo7.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./Home.css";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="parent">
        <div className="all1">
          <h1 className="text">BUY RENT SELL HOUSES ON THE GO</h1>

          <div className="photo">
            <img src={Image7} alt="/photo7" />
          </div>
        </div>
        <div className="btn__container">
          <button input type="submit">Explore</button>
          <button type="submit">Book Appointment</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Home;
