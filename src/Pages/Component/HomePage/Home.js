import React from 'react';
import Navbar from '../Shares/Navbar';
import Datas from './Datas';
import Drawer from './Drawer';
import Hero from './Hero';
import Products from './Products';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Products></Products>
            <Drawer></Drawer>




        </div>
    );
};

export default Home;