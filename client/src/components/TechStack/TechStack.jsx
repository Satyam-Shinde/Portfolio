import React from 'react';
import styles from './TechStack.module.css';

const techs = [
    { name: "HTML/CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 80 },
    { name: "MongoDB", percent: 70 },
    { name: "Node.js", percent: 65 },
];

const TechStack = () => {
    return (
        <section id="techstack" className={styles.stack_section}>
            <h2>My Tech Stack</h2>
            {techs.map((tech, index) => (
                <div key={index} className={styles.stack_item}>
                    <span>{tech.name}</span>
                    <div className={styles.progress_bar}>
                        <div className={styles.filler} style={{ width: `${tech.percent}%` }}></div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default TechStack;
