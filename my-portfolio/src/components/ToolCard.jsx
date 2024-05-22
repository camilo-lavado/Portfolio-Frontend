// src/components/ToolCard.jsx
import React from 'react';
import './styles/ToolCard.css';

const ToolCard = ({ icon, name }) => {
    return (
        <div className="tool-card">
            <div className="tool-icon">{icon}</div>
            <span className="tool-name">{name}</span>
        </div>
    );
};

export default ToolCard;
