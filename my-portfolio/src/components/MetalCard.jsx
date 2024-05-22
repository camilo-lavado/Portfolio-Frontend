// src/components/MetalCard.jsx
import React, { useEffect, useRef } from 'react';
import './styles/MetalCard.css';

const MetalCard = ({ children, title }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const card = cardRef.current;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        const card = cardRef.current;
        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="metal-card" ref={cardRef}>
            <div className="metal-card-header">
                {title && <h2>{title}</h2>}
            </div>
            <div className="metal-card-content">
                {children}
            </div>
        </div>
    );
};

export default MetalCard;
