import React from "react";
import { FaGithub,FaLinkedin, FaGit } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer : React.FC = () => { 
    return (
        <div className="footer" id="footer">
            <div className="icons">
        <FaGithub className="icon" />
        <FaLinkedin className="icon" />
        </div>
        <p className="ftexte"> Copyright 2024</p>
        <p className="ftexte"> By Fabrice Malanga </p>
        </div>
);
    };

export default Footer;