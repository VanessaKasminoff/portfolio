import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="hero-section">
        <div>
          <h1>Hi! Thanks for stopping by! :)</h1>
          <p>I'm Vanessa, a software developer</p>
        </div>
        <div className="hero-photo-div">
          <img className="my-photo" src="/src/assets/images/me.jpg" />
        </div>
      </div>
      <Footer/>
      {/* <div className="empty-div">
        <h2>Lorem Ipsum</h2>
        <button>I'm a button!</button>
      </div> */}
    </div>
  );
};

export default Landing;
