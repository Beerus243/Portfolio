import React from 'react';
import styles from './Technologies.module.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGit,
  FaGithub,
  FaChrome,
  FaPython,
  FaGoogle,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiMysql,
  SiFlutter,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiTypescript,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
} from 'react-icons/si';
import { RiNetflixFill, RiNextjsFill } from 'react-icons/ri';
import { VscVscodeInsiders } from 'react-icons/vsc';

const Technologies: React.FC = () => {
  return (
    <div className="footer-section" id="technologies">
      <h2>Technologies</h2>
      <div className="icons">
        <FaHtml5 className="icon" title="Html" />
        <FaCss3Alt className="icon" title="CSS3" />
        <FaJsSquare className="icon" title="Javascript" />
        <FaReact className="icon" title="React" />
        <FaGit className="icon" title="Git" />
        <FaGithub className="icon" title="Github" />
        <FaChrome className="icon" title="Chrome" />
        <FaPython className="icon" title="Python" />
        <FaGoogle className="icon" title="Google" />
        <FaDatabase className="icon" title="SQL" />
        <SiMysql className="icon" title="Mysql" />
        <RiNextjsFill className="icon" title="Nextjs" />
        <VscVscodeInsiders className="icon" title="Visual Code" />
        <SiMicrosoftword className="icon" title="Microsoft word" />
        <SiMicrosoftexcel className="icon" title="Microsoft" />
        <SiTypescript className="icon" title="TypeScript" />
        <SiAdobephotoshop className="icon" title="Adobe Photoshop" />
        <SiAdobeillustrator className="icon" title="Adobe illustrator" />
        <SiAdobeaftereffects className="icon" title="After effet" />
        <SiFlutter className="icon" title="Flutter" />
      </div>
    </div>
  );
};

export default Technologies;
