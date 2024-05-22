// src/components/FloatingCard.jsx
import React, { useEffect, useRef } from 'react';
import './styles/FloatingCard.css';

const FloatingCard = ({ children, title }) => {
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
        <div className="floating-card" ref={cardRef}>
            {title && <h2>{title}</h2>}
            <div className="floating-card-content">
                {children}
            </div>
        </div>
    );
};

export default FloatingCard;
