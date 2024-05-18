import React from 'react';
import Hero from '~/Components/Hero/Hero';
import NewCollections from '~/Components/NewCollections/NewCollections';
import Offers from '~/Components/Offers/Offers';
import Popular from '~/Components/Popular/Popular';

const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
        </div>
    );
};

export default Home;
