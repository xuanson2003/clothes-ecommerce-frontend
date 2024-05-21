import React from 'react';
import Hero from '~/Components/Hero/Hero';
import NewCollections from '~/Components/NewCollections/NewCollections';
import NewsLetter from '~/Components/NewsLetter/NewsLetter';
import Offers from '~/Components/Offers/Offers';
import Popular from '~/Components/Popular/Popular';

const Home = () => {
    return (
        <div>
            <Hero />
            <Popular title="Thời trang nữ phổ biến" category="women" />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    );
};

export default Home;
