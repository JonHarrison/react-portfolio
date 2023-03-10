import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import Carousel from 'react-bootstrap/carousel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBrand, faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

//import { 'fa-brand', 'fa-github' } from '@fortawesome/fontawesome-free-solid';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

import './style.css';

const ProjectCard = ({ project }) => {
    const { id, title, category, url, git, image, description } = project;
    return (
            <Card className="card project-item mb-3 bg-dark text-white" >
                {/* <Card.Header>{title}</Card.Header> */}
                <Card.Img className="card-img img img-fluid img-container project-image rounded-start" variant="top" src={image} alt={title} />
                {/* <Card.ImgOverlay> */}
                <Card.Body className="card-body">
                    <Card.Title className="card-text">{title}</Card.Title>
                    <Card.Text as="h6" className="card-text text-muted">{description}</Card.Text>
                    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </Card.Body>
                <div className="project-cta">
                    <a href={git} className='btn'><FaGithub /></a>
                    <a href={url} className='btn' target='_blank'><FaLink /></a>
                </div>
                {/* </Card.ImgOverlay> */}
            </Card>
    );
}

export default ProjectCard;