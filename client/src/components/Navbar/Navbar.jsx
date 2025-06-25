import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <a href="/">Satyam Shinde</a>
      </div>

      <div className={styles.right}>
        <a href="https://github.com/Satyam-Shinde/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
          <span>Github</span>
        </a>

        <a href="https://www.linkedin.com/in/satyam-shinde-885304254/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

        <a href="mailto:work.satyam90@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-envelope"></i>
          <span>Email</span>
        </a>

        <button className={styles.themeToggleBtn} onClick={() => setDarkMode(!darkMode)}>
          <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          <span style={{ marginLeft: '8px' }}>
            {darkMode ? 'Light' : 'Dark'}
          </span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
