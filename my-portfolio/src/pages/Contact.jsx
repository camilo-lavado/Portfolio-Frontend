// src/pages/Contact.jsx
import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (name && email && message) {
            const templateParams = {
                name: name,
                email: email,
                message: message,
            };

            emailjs.send('service_j3sf2yo', 'template_fpgi1gh', templateParams, 'rcttPEzXzhBo1cRLu')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Mensaje enviado correctamente', life: 3000 });
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSubmitted(false);
                }, (error) => {
                    console.log('FAILED...', error);
                    toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error al enviar el mensaje', life: 3000 });
                });
        } else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Por favor, complete todos los campos', life: 3000 });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <Toast ref={toast} />
            <h2>Contáctame</h2>
            <p className="contact-subtitle">¿Tienes alguna pregunta o quieres trabajar juntos?</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="p-fluid">
                    <div className="p-field">
                        <span className="p-float-label">
                            <InputText
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={classNames({ 'p-invalid': submitted && !name })}
                            />
                            <label htmlFor="name">Tu Nombre</label>
                        </span>
                        {submitted && !name && <small className="p-error">El nombre es obligatorio.</small>}
                    </div>
                    <div className="p-field">
                        <span className="p-float-label">
                            <InputText
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={classNames({ 'p-invalid': submitted && !email })}
                            />
                            <label htmlFor="email">Tu Email</label>
                        </span>
                        {submitted && !email && <small className="p-error">El email es obligatorio.</small>}
                    </div>
                    <div className="p-field">
                        <span className="p-float-label">
                            <InputTextarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className={classNames({ 'p-invalid': submitted && !message })}
                            />
                            <label htmlFor="message">Tu Mensaje</label>
                        </span>
                        {submitted && !message && <small className="p-error">El mensaje es obligatorio.</small>}
                    </div>
                    <div className="p-field p-d-flex p-jc-between">
                        <Button label="Enviar Mensaje" icon="pi pi-send" type="submit" className="p-button-outlined p-button-secondary" />
                        <small id="form-message" className="form-message"></small>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
