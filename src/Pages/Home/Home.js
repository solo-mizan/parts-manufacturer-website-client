import React from 'react';
import Banner from './Banner';
import InfoBanner from './InfoBanner';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoBanner></InfoBanner>
            <Stats></Stats>
        </div>
    );
};

export default Home;