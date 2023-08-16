import React from 'react';
import Active from './Active';
import Categories from './Categories';
import Environment from './Environment';
import FoodDelivery from './FoodDelivery';
import KnowUs from './KnowUs';
import Modal from './Modal';
import Password from './Password';
import Tabs from './Tabs';
import Card from '../Screen/Card/Card';
import LiveStream from '../LiveStream/LiveStream';
import PaginationComponent from './PaginationComponent';

const Home = () => {
    return (
        <div>
            <LiveStream/>
            <FoodDelivery/>
            <Categories/>
            <KnowUs/>
            <Environment/>
            {/* <Active/>
            <Tabs/>
            <Password/>
            <Modal/> */}
            <PaginationComponent/>
            <Card/>

        </div>
    );
};

export default Home;