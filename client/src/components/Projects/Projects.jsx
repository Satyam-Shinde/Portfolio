import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const Projects = () => {

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-ii09.onrender.com/api/projects')
            .then(res => res.json())
            .then(data => setProjectData(data));
    }, []);


    return (
        <div id="projects" className={styles.project_section}>
            <h2 className={styles.title}>Projects</h2>

            {projectData.map((project, index) => (
                <motion.div
                    key={index}
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                    <div className={styles.project_details}>
                        <img src="./images/projects/Project1.jpg" alt={project.name} />
                        <p>{project.name}</p>
                    </div>
                    <div className={styles.description}>
                        <p>{`"${project.desc}"`}</p>
                        <div className={styles.links}>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                            <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;
