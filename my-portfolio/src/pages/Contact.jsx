// src/pages/Contact.jsx
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        // Handle form submission
        console.log({ name, email, message });
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contáctame</h2>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu Nombre" />
                </div>
                <div className="p-col-12 p-md-6">
                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu Email" />
                </div>
                <div className="p-col-12">
                    <InputTextarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Tu Mensaje" />
                </div>
                <div className="p-col-12">
                    <Button label="Enviar Mensaje" icon="pi pi-send" onClick={handleSubmit} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
