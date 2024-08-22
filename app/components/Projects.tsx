import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section className="footer-section">
      <h2 className={styles.Heading}> Mes Projects</h2>
      <div className={styles.Projects}>
        <a href="https://kelasi.vercel.app/"> Kelasi</a>
        <a href="#"> RDV</a>
        <a href="https://rexal.vercel.app/"> REXAL</a>
        <a href="">Quizz</a>
        <a href="https://github.com/Beerus243/Portfolio"> Mon Portfolio</a>
      </div>
    </section>
  );
};

export default Projects;
