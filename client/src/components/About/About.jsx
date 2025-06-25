import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className={styles.about_section}
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.education}>
        <h4>Bachelor of Engineering (BE) in Computer Engineering - Sinhagad Academy Of Engineering, Kondhwa</h4>
        <p><i>November 2022 - June 2026</i></p>
        <p>Pune, Maharashtra, India</p>
        <br />
        <p>
          I am currently pursuing my Bachelor of Engineering in Computer Engineering at Sinhagad Academy Of
          Engineering. This program has provided me with a solid foundation in various aspects of computer science, from
          basic principles to advanced topics. I have developed a strong understanding of programming, algorithms, and
          web development, and I am continually expanding my knowledge in emerging technologies like artificial
          intelligence and machine learning.
        </p>
      </div>

      <hr />

      <div className={styles.education}>
        <h4>Web Developer Intern – Prodigy Infotech</h4>
        <p><i>July 2024 - Present</i></p>
        <p>Pune, Maharashtra, India</p>
        <br />
        <p>
          As a Web Developer Intern at Prodigy Infotech, I have been actively involved in several projects that have
          allowed me to apply and enhance my technical skills.
        </p>
      </div>

      <hr />
    </motion.section>
  );
};

export default About;
