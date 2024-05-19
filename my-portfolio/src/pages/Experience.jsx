// src/pages/Experience.jsx
import React from 'react';
import { Card } from 'primereact/card';

const Experience = () => {
    const experienceData = [
        {
            title: 'Almacenes Digitales',
            description: 'Desarrollador Full Stack Junior con habilidades en asistencia remota, solución de problemas y mejora continua del código. Conocimientos en resolución de problemas, levantamiento de incidentes y propuesta de mejoras al software. Dentro de las implementaciones que realicé destacan:'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2'
        },
        // Add more experiences here
    ];

    return (
        <section id="experience" className="section">
            <h2>Mi Experiencia</h2>
            <div className="p-grid">
                {experienceData.map((experience, index) => (
                    <div key={index} className="p-col-12 p-md-4">
                        <Card title={experience.title}>
                            <p>{experience.description}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
