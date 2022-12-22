import React from 'react';
import './Categories.css'
import '../Header/Header.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { IoPizza } from '@react-icons/all-files/io5/IoPizza';
import { FaHamburger } from '@react-icons/all-files/fa/FaHamburger';

import pizza from '../../components/images/pizza.png'
import pizza2 from '../../components/images/pizza2.png'
import pizza3 from '../../components/images/pizza3.png'
import pizza4 from '../../components/images/pizza4.png'
const Categories = () => {
    return (
        <div>
            <h1 className="categories-title">Our Popular <span className="categories">Categories</span></h1>
        <div className='container'>
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <div className="pizza">
                   <p><IoPizza/></p>
                   <p>Pizzas</p>
                </div>
                <div className="food-info">
                <div className="food-images">
                    <img src={pizza} alt="" className='food-img'/>
                    </div>
                    <p className="food-name">Pepperoni Pizza</p>
                    <p className="food-description">Di napoles</p>
                    <p className="food-price">$11,99</p>
                <button className="food-btn">Add to cart</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="food-cart">
                   <p><FaHamburger/></p>
                   <p>Burgers</p>
                </div>
                <div className="food-info">
                <div className="food-images">
                    <img src={pizza2} alt="" className='food-img'/>
                    </div>
                    <p className="food-name">Pepperoni Pizza</p>
                    <p className="food-description">Di napoles</p>
                    <p className="food-price">$13,99</p>
                <button className="food-btn">Add to cart</button>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="food-cart">
                   <p><FaHamburger/></p>
                   <p>Salads</p>
                </div>
                <div className="food-info">
                <div className="food-images">
                    <img src={pizza3} alt="" className='food-img'/>
                    </div>
                    <p className="food-name">Pepperoni Pizza</p>
                    <p className="food-description">Di napoles</p>
                    <p className="food-price">$11,99</p>
                <button className="food-btn">Add to cart</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div className="food-cart">
                   <p><IoPizza/></p>
                   <p>Combos</p>
                </div>
                <div className="food-info">
                    
                    <div className="food-images">
                    <img src={pizza4} alt="" className='food-img'/>
                    </div>
                    <p className="food-name">Pepperoni Pizza</p>
                    <p className="food-description">Di napoles</p>
                    <p className="food-price">$11,99</p>
                <button className="food-btn">Add to cart</button>
                </div>
            </div>
        </SwiperSlide>
   
        
        
      </Swiper>
    </>
        </div>
        </div>
    );
};

export default Categories;