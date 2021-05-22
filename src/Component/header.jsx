import React from "react";
import clogo from "./../Asset/clogo.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="layout">
      <div>
        <img className="img" src={clogo} alt="Coinbase logo" />
      </div>
      <div className="box1"><h4>Price</h4></div>
      <div className='box2'><h3>Learn</h3></div>
      <div className='box3'><h3>Individual</h3></div>
      <div className='box4'><h3>Business</h3></div>
      <div className='box5'><h3>Developers</h3></div>
      <div className='box6'><h3 >Company</h3></div>
      <div className="box7"><h3>Sign in</h3></div>
      <button className="button">Get started</button>
      <span> </span>
    </div>
  );
};

export default Header;
