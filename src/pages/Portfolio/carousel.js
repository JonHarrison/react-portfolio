import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

function PortfolioCarousel({ projects }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className="carousel carousel-light slide w-100">
            {projects && projects.map((project) => {
                const { id, title, category, url, git, image, description } = project;
                return (<Carousel.Item key={id} className="carousel-item item">
                    <div className="carousel-image">
                        <img className="d-block img"
                            src={image}
                            alt={title}
                        />
                    </div>
                    <Carousel.Caption className="carousel-caption caption">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        {/* <p>{category}</p> */}
                        <div className="project-cta">
                            <a href={git} className='btn'><FaGithub /></a>
                            <a href={url} className='btn btn-primary' target='_blank' rel='noreferrer'><FaLink /></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                );
            })}
        </Carousel>
    );

}

export default PortfolioCarousel;
