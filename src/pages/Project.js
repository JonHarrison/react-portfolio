import React from 'react'

import { useParams } from 'react-router-dom'

import ProjectCard from '../components/ProjectCard';

import projects from '../data/projects.json';

const Project = () => {
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

    return (
        <ProjectCard class="container" project={project} />
    )
}

export default Project