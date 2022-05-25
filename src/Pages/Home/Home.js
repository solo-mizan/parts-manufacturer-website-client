import React from 'react';
import Banner from './Banner';
import InfoBanner from './InfoBanner';
import Stats from './Stats';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoBanner></InfoBanner>
            <Tools></Tools>
            <Stats></Stats>
        </div>
    );
};

export default Home;