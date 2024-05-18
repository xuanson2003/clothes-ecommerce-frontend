import React from 'react';
import Hero from '~/Components/Hero/Hero';
import Offers from '~/Components/Offers/Offers';
import Popular from '~/Components/Popular/Popular';

const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
        </div>
    );
};

export default Home;
