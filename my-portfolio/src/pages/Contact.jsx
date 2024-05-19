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
        <section id="contact" className="section">
            <h2>Contact Me</h2>
            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                </div>
                <div className="p-col-12 p-md-6">
                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                </div>
                <div className="p-col-12">
                    <InputTextarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Your Message" />
                </div>
                <div className="p-col-12">
                    <Button label="Send Message" icon="pi pi-send" onClick={handleSubmit} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
