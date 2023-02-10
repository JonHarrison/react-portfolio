import React, { useState } from 'react';

import ProjectCard from '../../components/ProjectCard';
import Wrapper from '../../containers/Wrapper';

const PortfolioCards = ({ projects }) => {
    return (
        <Wrapper>
            <div className="flex flex-row flex-wrap" id="projects">
                {/* <h2>Projects list</h2> */ }
                <div className="row project-container" >
                    { projects && projects.map((project) => {
                        return <ProjectCard
                            key={project.id}
                            project={project}
                        />;
                    })}
                </div>
            </div>
        </Wrapper>
    );

}

export default PortfolioCards;