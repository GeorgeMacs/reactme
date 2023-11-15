import React from "react";
import "./Header.css";
import paypal from "./image/paypal.png";
import visa from "./image/visa.jpg";
import mastercard from "./image/mastercard.jpg";
import applepay from "./image/Apple pay.jpg";
import profilephoto from "./image/IMG_0075.jpeg";
const Header = () => {
  return (
    <div className="Header-container">
      <div className="ProfilePhoto">
        <img src={profilephoto} alt="Profile shot"></img>
      </div>
      <div className="Header-content">
        <h1>Hy! I Am</h1> <br /> <br />
        <h2 className="fullname"> MacAlex George</h2>
        <h2>I'm a Technical and Socio-Content Writer</h2>
        <h3>
          I have over 5 years experience in the tech-space, to comfortably write
          any tech article. <br />
          I also write articles on Psychology and the human mind. <br />
          click on any of the buttons below, to contact me for every and any
          kind of writing gig.
        </h3>
        <div className="payment">
          <h3 className="buttons">Hire me</h3>
          <img src={paypal} alt="Paypal"></img>
          <img src={visa} alt="visacard"></img>
          <img src={mastercard} alt="mastercard"></img>
          <img src={applepay} alt="applepay"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
