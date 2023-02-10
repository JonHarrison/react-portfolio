import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';

import ProjectCard from '../../components/ProjectCard';
import Projects from '../../containers/Projects';

const PortfolioCards = ({ projects }) => {
    return (
        <Projects className="project-container" id="project">
                {/* <h2>Projects list</h2> */ }
                <Row className="row" >
                    { projects && projects.map((project) => {
                        return <ProjectCard
                            key={project.id}
                            project={project}
                        />;
                    })}
                </Row>
        </Projects>
    );

}

export default PortfolioCards;