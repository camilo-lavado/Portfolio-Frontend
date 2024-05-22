// src/pages/About.jsx
import React, { useEffect, useState, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import MetalCard from '../components/MetalCard';
import './styles/About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartTyping(true);
        }
    }, [inView]);

    return (
        <section id="about" className="about-section" ref={ref}>
            <MetalCard title="Sobre Mí">
                {startTyping && (
                    <Typewriter
                        options={{
                            strings: [
                                "Desarrollador Full Stack JavaScript y Java, con formación en Bootcamps y diplomado en gestión ágil de equipos."
                            ],
                            autoStart: true,
                            loop: false,
                            delay: 70,
                            deleteSpeed: 40,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Desarrollador Full Stack Web")
                                .callFunction(() => {
                                    document.querySelector('.Typewriter__cursor').style.display = 'none';
                                })
                                .start();
                        }}
                    />
                )}
            </MetalCard>
        </section>
    );
};

export default About;
