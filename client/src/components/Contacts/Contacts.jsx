import React, { useState } from 'react';
import styles from './Contacts.module.css';
import { motion } from 'framer-motion';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    form.append('access_key', process.env.REACT_APP_ACCESS_KEY);
    const object = Object.fromEntries(form);
    const json = JSON.stringify(object);

    const res = await fetch('https://portfolio-ii09.onrender.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.error('Form submission failed', res);
    }
  };

  return (
    <motion.section
      id="contact"
      className={styles.contact_section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact</h2>

      <div className={styles.group}>
        {/* Left Text and Links */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            I'm always excited to connect with fellow tech enthusiasts, professionals, and potential collaborators.
            Let's discuss technology, share ideas, or explore opportunities to work together!
          </p>
          <p><strong>Feel free to reach out to me through the following channels:</strong></p>

          <div className={styles.contact_links}>
            {[
              {
                href: "mailto:work.satyam90@gmail.com",
                icon: "fa-envelope",
                label: "Email",
                text: "work.satyam90@gmail.com",
              },
              {
                href: "https://github.com/Satyam-Shinde/",
                icon: "fa-github",
                label: "Github",
                text: "Satyam-Shinde",
              },
              {
                href: "https://www.linkedin.com/in/satyam-shinde-885304254/",
                icon: "fa-linkedin",
                label: "LinkedIn",
                text: "Satyam Shinde",
              },
              {
                href: "https://x.com/Satyam_S2004",
                icon: "fa-square-x-twitter",
                label: "Twitter X",
                text: "Satyam_S2004",
              },
              {
                href: "https://www.instagram.com/_satyam__shinde_/",
                icon: "fa-instagram",
                label: "Instagram",
                text: "Satyam Shinde",
              }
            ].map((link, idx) => (
              <div key={idx} className={styles.contact_link}>
                <a className={styles.social_icon} href={link.href} target="_blank" rel="noopener noreferrer">
                  <i className={`fa-brands ${link.icon}`}></i>
                  <span>{link.label}:</span> {link.text}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols="30" rows="10" value={formData.message} onChange={handleChange}></textarea>

          <button type="submit">Submit</button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contacts;
