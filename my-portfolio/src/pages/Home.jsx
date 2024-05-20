// src/pages/Home.jsx
import React from 'react';
import MyButton from '../components/MyButton';
import './styles/Home.css';

const Home = () => {
    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1 className='h1home'>Camilo Lavado</h1>
                <p className='p1home'>Desarrollador Full Stack Web</p>
                <MyButton label="Conóceme más" onClick={scrollToAbout} />
            </div>
        </section>
    );
};

export default Home;
