import React from "react";
import { FaGithub,FaLinkedin, FaGit } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => (
    <div className={styles.iconcontainer}>

        <FaGithub className={styles.iconFooter} />
        <FaLinkedin className={styles.iconFooter} />
    <div className={styles.paragraph}>
        <p className={styles.paragraph}> Copyright 2024</p>
        <p className={styles.paragraph}> By Fabrice Malanga </p>
    </div>
    </div>
);

export default Footer;