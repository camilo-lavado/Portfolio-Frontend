// src/components/ProjectCard.jsx
import React from 'react';
import { Card } from 'primereact/card';
import MyButton from './MyButton';
import './styles/ProjectCard.css';

const ProjectCard = ({ title, description, link, image }) => {
    const header = (
        <img alt={title} src={image} className="project-card-image" />
    );

    const footer = (
        <span>
            <MyButton label="Ir a la página" icon="pi pi-external-link" className="project-card-button" onClick={() => window.open(link, "_blank")} />
        </span>
    );

    return (
        <Card title={title} subTitle={description} header={header} footer={footer} className="project-card">
        </Card>
    );
}

export default ProjectCard;
