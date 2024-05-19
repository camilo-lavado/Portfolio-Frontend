// src/components/Header.jsx
import React from 'react';
import { Menubar } from 'primereact/menubar';

const Header = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { label: 'About', icon: 'pi pi-fw pi-user', command: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Projects', icon: 'pi pi-fw pi-briefcase', command: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Contact', icon: 'pi pi-fw pi-envelope', command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    return (
        <Menubar model={items} />
    );
};

export default Header;
