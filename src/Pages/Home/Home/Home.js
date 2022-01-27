import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;