import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from '../../components/CarouselCard';

import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

function PortfolioCarousel({ projects }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        // fade activeIndex={index} onSelect={handleSelect}
        <div className="root">
            <Carousel className="carousel carousel-light slide">
                {/* <div className="carousel-inner"> */}
                    {/* <Carousel.Item className="carousel-item item active">
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
                    </Carousel.Item> */}
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
                            <div className="project-cta">
                                <a href={git} className='btn'><FaGithub /></a>
                                <a href={url} className='btn btn-primary' target='_blank'><FaLink /></a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                        );
                        {/* return (<CarouselCard
                            key={project.id}
                            project={project}
                        />); */}
                    })}
                {/* </div> */}
            </Carousel>
        </div>
    );

}

export default PortfolioCarousel;
