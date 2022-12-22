import React from 'react';
import Categories from './Categories';
import Environment from './Environment';
import FoodDelivery from './FoodDelivery';
import KnowUs from './KnowUs';

const Home = () => {
    return (
        <div>
            <FoodDelivery/>
            <Categories/>
            <KnowUs/>
            <Environment/>
        </div>
    );
};

export default Home;