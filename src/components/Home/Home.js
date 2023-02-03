import React from 'react';
import Categories from './Categories';
import Environment from './Environment';
import FoodDelivery from './FoodDelivery';
import KnowUs from './KnowUs';
import Modal from './Modal';
import Password from './Password';
import Tabs from './Tabs';

const Home = () => {
    return (
        <div>
            <FoodDelivery/>
            <Categories/>
            <KnowUs/>
            <Environment/>
            <Tabs/>
            <Password/>
            <Modal/>
        </div>
    );
};

export default Home;