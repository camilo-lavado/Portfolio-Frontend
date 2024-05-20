// src/components/BottomNav.jsx
import React from 'react';
import { Menubar } from 'primereact/menubar';
import './styles/BottomNav.css';

const BottomNav = () => {
    const items = [
        { icon: 'pi pi-fw pi-home', command: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { icon: 'pi pi-fw pi-user', command: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
        { icon: 'pi pi-fw pi-briefcase', command: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) },
        { icon: 'pi pi-fw pi-envelope', command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    const ptOptions = {
        root: {
            className: 'bottomnav-custom-menubar-root'
        },
        menu: {
            className: 'bottomnav-custom-menubar-menu'
        },
        menuitem: {
            className: 'bottomnav-custom-menubar-menuitem'
        },
        action: {
            className: 'bottomnav-custom-menubar-action'
        },
        icon: {
            className: 'bottomnav-custom-menubar-icon'
        }
    };

    return (
        <Menubar model={items} pt={ptOptions} className="bottomnav-custom-menubar" />
    );
};

export default BottomNav;
