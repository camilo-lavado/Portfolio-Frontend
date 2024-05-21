// src/pages/About.jsx
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import './styles/About.css';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Solo se activa una vez
        threshold: 0.1, // Se activa cuando el 10% del elemento está en vista
    });
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartTyping(true);
        }
    }, [inView]);

    return (
        <section id="about" className="about-section" ref={ref}>
            <h2>Sobre Mí</h2>
            {startTyping && (
                <Typewriter
                    options={{
                        strings: [
                            "Desarrollador Full Stack JavaScript y Java, con formación en Bootcamps y diplomado en gestión ágil de equipos.",
                            "Profesional enfocado en el trabajo en equipo, el aprendizaje continuo y el cumplimiento de objetivos."
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 70,
                        deleteSpeed: 20,
                    }}
                />
            )}
        </section>
    );
};

export default About;
