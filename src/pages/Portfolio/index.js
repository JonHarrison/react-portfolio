import React from 'react';

import PortfolioCards from './cards.js';
// import CarouselCards from './carousel.js';

import './style.css';

const Portfolio = ({ projects }) => {

        {/* <CarouselCards projects={projects} /> */}
    return (
        <PortfolioCards projects={projects} />
    );

};

export default Portfolio;