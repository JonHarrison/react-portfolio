import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import Carousel from 'react-bootstrap/carousel'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { faBrand, faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

//import { 'fa-brand', 'fa-github' } from '@fortawesome/fontawesome-free-solid';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

import './style.css';

const CarouselCard = React.forwardRef(({project}, ref) => {
    const { id, title, category, url, git, image, description } = project;
    console.log({project});
    return (
        <Carousel.Item className="carousel-item item">
            <div className="carousel-image">
                <img className="d-block w-100 img"
                    src="https://via.placeholder.com/600x300?text=Energise+Image"
                    alt="Energise"
                />
            </div>
            <Carousel.Caption className="carousel-caption caption">
                <h3>Energise Caption</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
});

export default CarouselCard;