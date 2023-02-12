import React, { useParams } from 'react'

const Project = (projects) => {
    const params = useParams();
    const project = projects.find((project) => project.id === params.id);
    // then what ?

    return (
        <div>Project</div>
    )
}

export default Project