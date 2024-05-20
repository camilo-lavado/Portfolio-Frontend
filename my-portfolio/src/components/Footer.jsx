// src/components/Footer.jsx
import React from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import './styles/Footer.css'; // Asegúrate de importar el archivo de estilos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Camilo Ignacio Lavado García</p>
                <div className="social-links">
                    <Button
                        icon="pi pi-github"
                        className="p-button-rounded p-button-secondary p-button-outlined"
                        aria-label="GitHub"
                        onClick={() => window.open('https://github.com/camilo-lavado/', '_blank')}
                    />
                    <Button
                        icon="pi pi-linkedin"
                        className="p-button-rounded p-button-secondary p-button-outlined"
                        aria-label="LinkedIn"
                        onClick={() => window.open('https://www.linkedin.com/in/camilo-lavado/', '_blank')}
                    />
                    <Button
                        icon="pi pi-envelope"
                        className="p-button-rounded p-button-secondary p-button-outlined"
                        aria-label="Email"
                        onClick={() => window.open('mailto:camilolavado.it@gmail.com', '_blank')}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
