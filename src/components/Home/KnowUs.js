import React from "react";
import "./KnowUs.css";
import "../Header/Header.css";
import know from "../../components/images/know-us.jpg";
const KnowUs = () => {
  return (
    <div className="know-container">
      <div>
      <h1 className="know-title">
        Get to know <span className="us">us</span>
      </h1>
      </div>
      <div className="know-us">
        <div className="know-img">
          <img src={know} alt="" className="get-img"/>
        </div>
        <div>
        <div className="teamwork">
      <p >
      Teamwork <span className="success"> is the key to our sucess</span>
      </p>
      </div>
          <p className="know-des">
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
