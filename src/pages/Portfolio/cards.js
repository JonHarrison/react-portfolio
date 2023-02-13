import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectCard from '../../components/ProjectCard';
import Projects from '../../containers/Projects';

const PortfolioCards = ({ projects }) => {
    return (
        <Projects className="project-container" id="project">
                {/* <h2>Projects list</h2> */ }
                <Row className="row" >
                    { projects && projects.map((project) => {
                        {/* return <Col className="col col-md-2 d-flex"> */}
                        return (
                            <Col className="col d-flex">
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            </Col>
                        )
                    })}
                    {/* <div class="w-100" /> */}
                </Row>
        </Projects>
    );

}

export default PortfolioCards;