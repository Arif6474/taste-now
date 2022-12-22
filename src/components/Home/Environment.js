import React from "react";
import "./Environment.css";
import "../Header/Header.css";
import environment from "../../components/images/environment.jpg";
const Environment = () => {
  return (
    <div className="know-container">
      <div className="know">
        <div>
          <div className="teamworks">
            <p>
              We are all in for the<span className="succeed"> environment</span>
            </p>
          </div>
          <p className="know-desc">
            TasteNow donates $1 penny for every purchase made from the app to an
            organization that takes care of our environment. We believe that with
            everyone´s help, we can make a better world.
          </p>
        </div>
        <div className="know-image">
          <img src={environment} alt="" className="get-image" />
        </div>
      </div>
    </div>
  );
};

export default Environment;
