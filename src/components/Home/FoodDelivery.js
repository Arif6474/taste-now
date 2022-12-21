import React from "react";
import "../Header/Header.css";
import bg  from '../../components/images/bg.png'
import bg2  from '../../components/images/bg2.png'
import './FoodDelivery.css'
const FoodDelivery = () => {
  return (
    <div className="container">
      <div className="food-delivery">
        <div>
          <p className="food-title">Experience food <span className="delivery"> Delivery</span> like no other</p>
          <p className="description">
            We deliver the food of your choice wherever, whenever. Select your
            food from only the top restaurants in the area, and get it in a
            flash. Download the app now to discover more.
          </p>
        </div>
        <div>
        <div className="food-bg-main">
        <img src={bg2} alt="" className="food-bg" />
     
        <img src={bg} alt="" className="food-bg2"/>
       
        </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;
