// src/pages/Skills.jsx
import React from 'react';
import FloatingCard from '../components/FloatingCard';
import ToolCard from '../components/ToolCard';
import './styles/Skills.css';
import 'primeicons/primeicons.css';
import { FaJava, FaReact, FaNode, FaGit, FaGithub, FaGitlab, FaNpm, FaSlack, FaTrello } from 'react-icons/fa';
import { SiSpring, SiMysql, SiHibernate, SiExpress, SiMongodb, SiJavascript } from 'react-icons/si';


const skills = {
    "Java": [
        { icon: <FaJava />, name: 'Java' },
        { icon: <SiSpring />, name: 'Spring' },
        { icon: <SiHibernate />, name: 'Hibernate' },
        { icon: <SiMysql />, name: 'MySql' },
    ],
    "MERN": [
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiExpress />, name: 'Express' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNode />, name: 'Node' },
    ],
    "Otros": [
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <i className="pi pi-prime prime-icon" />, name: 'Primefaces' },
        { icon: <FaReact />, name: 'PrimeReact' },
        { icon: <FaGit />, name: 'GIT' },
        { icon: <FaGithub />, name: 'Github' },
        { icon: <FaGitlab />, name: 'GitLab' },
        { icon: <FaNpm />, name: 'NPM' },
        { icon: <FaSlack />, name: 'Slack' },
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <FloatingCard title="Skills & Tecnologías">
                {Object.keys(skills).map(category => (
                    <div key={category} className="skills-category">
                        <h3>{category}</h3>
                        <div className="skills-grid">
                            {skills[category].map(skill => (
                                <ToolCard key={skill.name} icon={skill.icon} name={skill.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </FloatingCard>
        </section>
    );
};

export default Skills;
