// src/pages/Home.jsx
import React from 'react';
import { Button } from 'primereact/button';

const Home = () => {
    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1>Camilo Lavado</h1>
                <p>Desarrollador Full Stack JavaScript y Java</p>
                <Button label="Conóceme más" className="p-button-outlined p-button-secondary" onClick={scrollToAbout} />
            </div>
        </section>
    );
};

export default Home;
