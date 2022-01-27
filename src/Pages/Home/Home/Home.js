import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;