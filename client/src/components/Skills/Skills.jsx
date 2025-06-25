import React, { useEffect, useState } from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-ii09.onrender.com/api/skills')
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.error("Error fetching skills:", err));
    }, []);

    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <section id="skills" className={styles.skills_section}>
            <h2 className={styles.title}>Skills</h2>
            <p className={styles.text}>
                I have developed a diverse skill set that spans various domains of computer science and web development.
                Here are some of my key skills:
            </p>

            {Object.entries(grouped).map(([category, list]) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>{category}</h3>
                    <div className={styles.cells}>
                        {list.map((skill, idx) => (
                            <div key={idx} className={styles.cell}>
                                <img src={skill.image} alt={`${skill.name} icon`} width="30px" height="30px" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default Skills;
