// src/pages/Projects.jsx
import React from 'react';
import { Carousel } from 'primereact/carousel';
import ProjectCard from '../components/ProjectCard';
import './styles/Projects.css';

import ADDataImage from '../assets/media/AD-data.png';
import ADigitalesImage from '../assets/media/Adigitales.png';

const Projects = () => {
    const projects = [
        {
            title: "Almacenes Digitales",
            description: "This is a description for project one.",
            link: "https://www.almacenesdigitales.cl/",
            image: ADigitalesImage
        },
        {
            title: "AD-data",
            description: "This is a description for project two.",
            link: "https://ad-data.cl/",
            image: ADDataImage
        },
        {
            title: "AD-data",
            description: "This is a description for project two.",
            link: "https://ad-data.cl/",
            image: ADDataImage
        },
        {
            title: "AD-data",
            description: "This is a description for project two.",
            link: "https://ad-data.cl/",
            image: ADDataImage
        },
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const projectTemplate = (project) => {
        return <ProjectCard {...project} />;
    }

    return (
        <div className="projects">
            <Carousel
                value={projects}
                itemTemplate={projectTemplate}
                numVisible={3}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                prevIcon="pi pi-chevron-left"
                nextIcon="pi pi-chevron-right"
            />
        </div>
    );
}

export default Projects;
