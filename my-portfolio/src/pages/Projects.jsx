// src/pages/Projects.jsx
import React from 'react';
import { Card } from 'primereact/card';

const Projects = () => {
    const projectData = [
        {
            title: 'Project 1',
            description: 'Description of project 1'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2'
        },
        // Add more projects here
    ];

    return (
        <section id="projects" className="projects-section">
            <h2>Mis Proyectos</h2>
            <div className="p-grid">
                {projectData.map((project, index) => (
                    <div key={index} className="p-col-12 p-md-4">
                        <Card title={project.title}>
                            <p>{project.description}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
