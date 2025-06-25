import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
    const typedElementRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElementRef.current, {
            strings: ['Web Developer.', 'Software Developer.', 'Web Designer.'],
            typeSpeed: 100,
            backSpeed: 25,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <motion.div
            className={styles.hero_section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className={styles.text}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h2>Hi, I'm Satyam & I'm a</h2>
                <span className={styles.element} ref={typedElementRef}></span>
                <p>
                    Hello! I'm Satyam Shinde, a passionate Computer Science student currently pursuing my Bachelor's in
                    Engineering at Sinhagad Academy Of Engineering in Pune, Maharashtra. I am also an intern at Prodigy Infotech,
                    where I am honing my skills as a web developer. I am committed to continuous learning and have completed
                    certifications in Front End Development, Responsible AI, Generative AI, and Enterprise-grade AI.
                </p>

                <div className={styles.links}>
                    <a href="#about">
                        <i className="fa-solid fa-user"></i>
                        <span> About Me</span>
                    </a>
                    <a href="#skills">
                        <i className="fa-solid fa-code"></i>
                        <span> Skills</span>
                    </a>
                    <a href="#resume">
                        <i className="fa-solid fa-file"></i>
                        <span> Resume</span>
                    </a>
                    <a href="#techstack">
                        <i className="fa-solid fa-bars-progress"></i>
                        <span> Tech Stack</span>
                    </a>
                    <a href="#testimony">
                        <i className="fa-solid fa-pen"></i>
                        <span> Testimony</span>
                    </a>
                    <a href="#contact">
                        <i className="fa-solid fa-phone"></i>
                        <span> Contact</span>
                    </a>
                </div>
            </motion.div>

            <motion.div
                className={styles.headshot}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <img src="images/DEV-ME.webp" alt="Satyam Shinde Headshot" />
            </motion.div>
        </motion.div>
    );
};

export default Hero;
