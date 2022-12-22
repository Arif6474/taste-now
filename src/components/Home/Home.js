import React from 'react';
import Categories from './Categories';
import FoodDelivery from './FoodDelivery';
import KnowUs from './KnowUs';

const Home = () => {
    return (
        <div>
            <FoodDelivery/>
            <Categories/>
            <KnowUs/>
        </div>
    );
};

export default Home;