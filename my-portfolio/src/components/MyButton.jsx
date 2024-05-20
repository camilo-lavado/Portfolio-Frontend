// src/components/MyButton.jsx
import React from 'react';
import { Button } from 'primereact/button';
import './styles/MyButton.css';

function MyButton(props) {
    return (
        <Button {...props} className="custom-button" />
    );
}

export default MyButton;
