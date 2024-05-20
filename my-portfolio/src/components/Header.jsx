// src/components/Header.jsx
import React from 'react';
import { Menubar } from 'primereact/menubar';
import './styles/Header.css';

const Header = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { label: 'Sobre Mí', icon: 'pi pi-fw pi-user', command: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Proyectos', icon: 'pi pi-fw pi-briefcase', command: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Contactame', icon: 'pi pi-fw pi-envelope', command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    const ptOptions = {
        root: {
            className: 'header-custom-menubar-root'
        },
        menu: {
            className: 'header-custom-menubar-menu'
        },
        menuitem: {
            className: 'header-custom-menubar-menuitem'
        },
        action: {
            className: 'header-custom-menubar-action'
        },
        icon: {
            className: 'header-custom-menubar-icon'
        }
    };

    return (
        <Menubar model={items} pt={ptOptions} className="header-custom-menubar" />
    );
};

export default Header;
