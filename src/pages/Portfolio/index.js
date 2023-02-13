import React from 'react';

import { useLocation } from 'react-router-dom';

import PortfolioCards from './cards.js';
import CarouselCards from './carousel.js';

import './style.css';

const Portfolio = ({ projects }) => {

    const { query, search } = useLocation()
    const layout = new URLSearchParams(search).get('layout');
    console.log(layout);

    switch (layout) {
        case "grid": return (<PortfolioCards projects={projects} />); break;
        case "carousel": return (<CarouselCards projects={projects} /> ); break;
    }
};

export default Portfolio;