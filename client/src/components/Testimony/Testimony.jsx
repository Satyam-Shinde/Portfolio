import React, { useState, useEffect } from 'react';
import styles from './Testimony.module.css';
import testimoniesData from '../../Json/Testimony.json';
import { motion } from 'framer-motion';

const Testimony = () => {
    const [testimoniesData, setTestimoniesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/testimonies')
            .then(res => res.json())
            .then(data => setTestimoniesData(data));
    }, []);

    return (
        <section id="testimony" className={styles.testimony_section}>
            <h2>Testimony</h2>
            {testimoniesData.map((testimony, index) => (
                <motion.div
                    key={index}
                    className={styles.group}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className={styles.person_details}>
                        <img src={testimony.image} alt={testimony.name} />
                        <p>{testimony.name}</p>
                        <p>{testimony.desc}</p>
                    </div>
                    <div className={styles.text}>{`"${testimony.opinion}"`}</div>
                </motion.div>
            ))}
        </section>
    );
};

export default Testimony;
