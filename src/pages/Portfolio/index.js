import React from 'react';

import { useLocation } from 'react-router-dom';

import PortfolioCards from './cards.js';
import CarouselCards from './carousel.js';

import './style.css';

const Portfolio = ({ projects }) => {

    const { search } = useLocation()
    const layout = new URLSearchParams(search).get('layout');
    // console.log(layout);

    switch (layout) {
        case "carousel":
            return (<CarouselCards projects={projects} /> );
        case "grid":
        default:
            return (<PortfolioCards projects={projects} />);
    }
};

export default Portfolio;