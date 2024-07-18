import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="hero-section">
        <div>
          <div className="type-container">
          <h1 className="type-animation">Hi! Thanks for stopping by :)</h1>
          </div>
          <p>I'm Vanessa</p>
          <p>
            A software developer, gamer, and tea enthusiast
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z"></path>
              </svg>
            </span>
          </p>
        </div>
        <div className="hero-photo-div">
          <img className="my-photo" src="/src/assets/images/me.jpg" />
        </div>
      </div>
      <Footer />
      {/* <div className="empty-div">
        <h2>Lorem Ipsum</h2>
        <button>I'm a button!</button>
      </div> */}
    </div>
  );
};

export default Landing;
