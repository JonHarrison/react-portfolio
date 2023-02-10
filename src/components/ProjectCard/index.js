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

const ProjectCard = ({ project }) => {
    const { id, title, category, url, git, image, description } = project;
    return (
        <div className="project-item col d-flex align-items-stretch">
            <Card className="card mb-3 bg-dark text-white" >
                {/* <Card.Header>{title}</Card.Header> */}
                <Card.Img className="img-container project-image img img-fluid rounded-start" variant="top" src={image} alt={title} />
                {/* <Card.ImgOverlay> */}
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text as="h6">{description}</Card.Text>
                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        <div className="project-cta">
                            <a href={git} className='btn'><FaGithub /></a>
                            <a href={url} className='btn btn-primary' target='_blank'><FaLink /></a>
                        </div>
                    </Card.Body>
                {/* </Card.ImgOverlay> */}
            </Card>

            {/* <div className="container project-container card mb-3" style={{ maxWidth: '540px' }} >
                <div className="row g-0">
                    <div className="col-md-4 img-container">
                        <img className="project-image img-container img-fluid rounded-start" src={image} alt={title}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <div className="project-cta">
                                <a href={git} className='btn'>Github</a>
                                <a href={url} className='btn btn-primary' target='_blank'>Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="project card">
                <div className="img-container">
                    <img className="img-fluid rounded-start" src={image} alt={title}></img>
                </div>
                <div className="content">
                    <h5>{title}</h5>
                    <h6>{category}</h6> */}
                    {/* <i className="fa-brands fa-github" /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-font-awesome" /> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                    {/* <h6>{description}</h6> */}
                    {/* <FontAwesomeIcon icon="fa-brand fa-github" /> */}
                    {/* <div>
                        <a href={git}><FaGithub /> Code Repository</a>
                    </div> */}
                    {/* <div>
                        <a href={url}><FaLink /> Live Website</a>
                    </div> */}
                    {/* <Link
                    to={git}
                    className="inline-flex"
                >
                    <FaGithub />
                </Link> */}
                    {/* <Link
                    to={`/projects/${id}`}
                    // bg-black text-white
                    className="inline-flex"
                > */}
                    {/* <span>Learn more</span> */}
                    {/* <div> */}
                    {/* <i className="fa-brands fa-github" /> */}
                    {/* <FaGithub /> */}
                    {/* <FontAwesomeIcon icon={brands('github')} /> */}
                    {/* </div> */}
                    {/* <span> */}
                    {/* <i className="fa-brands fa-github" /> */}
                    {/* <FaGithub /> */}
                    {/* URL */}
                    {/* </span> */}
                    {/* </Link> */}
                {/* </div> */}
            {/* </div> */}
        </div>

    );
}

export default ProjectCard;