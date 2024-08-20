import React from 'react';
import styles from "./Bio.module.css";
import { MdScreenSearchDesktop } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa';
import { FaMobileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Bio: React.FC = () => {
        return (
                <div className='section'>
                        <Image src='/images/Portfolio.png' className='imgPortfo' alt='imgportfolio' width={300} height={300} />
                        <h2 className={styles.Heading}> Fabrice Malanga Murbal</h2>
                        <p className={styles.titre2}> Dévellopeur Fullstack</p>
                        <FaGithub className='icon2' title='Github' />
                        <FaLinkedin className='icon2' title='Linkedin' />
                        <h3 className={styles.Heading}> Que fait Fabrice ?</h3>
                        <MdScreenSearchDesktop className='Desktop' title='Desktop' />
                        <p className={styles.titre}> Développement Web</p>
                        <p className={styles.description}> Dans le développement il ne fait pas que coder. Il peut faire
                                le suivi des projet et son élaboration. Il va de la modélisation d&aposun système
                                à sa mise en ligne de l&aposapplication. Il peut aussi faire la maintenace d&aposune
                                application web ou d&aposun site web. Il fait plusieurs technologie et veut
                                en apprendre encore plus. Dans la conception web, Fabrice peut faire les
                                deux partie d&aposun site web, la partie client et la partie serveur.
                                Technologies : HTML, CSS, JavaScript, Sql Serveur, Mysql
                                conception base de données
                                Tout comme pour le web, Fabrice de fait la conception des bases
                                de données. Il peut étudier, modéliser et concevoir le système pour une application. Et
                                bien-sûr il peut aussi faire la maintenance de ce dernier.Dans le dévéloppement web,
                                Fabrice fait généralement du Html5, CSS3 et JavaScript. A ceci s&aposajoute
                                le Sql,
                        </p>
                        <p className={styles.paragraphe}><span color="red">Technologies</span> : HTML, CSS3, JAVASCRIPT, TYPESCRIPT, REACT, NEXTJS </p>
                        <FaDatabase className='Desktop' title='SQL' />
                        <p className={styles.titre}> Conception base des données</p>
                        <p className={styles.description}> Dans le Domaine de base des données
                                avec une solide expertise en MySQL et SQL, je maîtrise l&aposart de la gestion
                                et de la manipulation des données. J&aposai acquis une expérience approfondie
                                la modélisation de bases de données, la création de requêtes complexes,
                                et l&aposoptimisation des performances des systèmes de gestion de bases de données.
                                <br />
                                <br />Mon travail inclut :
                                - Modélisation des Données : Conception de schémas relationnels efficaces
                                pour organiser et structurer les informations en fonction des besoins spécifiques des projets.
                                <br />
                                <br />
                                - Création et Gestion des Bases de Données : Développement de bases de données robustes,
                                gestion des relations entre les tables, et mise en place des contraintes pour assurer
                                l&aposintégrité des données.
                                <br />
                                - Requêtes SQL Complexes : Extraction, transformation, et chargement (ETL) des données en
                                utilisant des requêtes SQL avancées pour répondre aux besoins analytiques et opérationnels.
                                - Optimisation des Performances : Mise en œuvre de stratégies d&aposindexation, de normalisation,
                                et de partitionnement des données pour maximiser l&aposefficacité et réduire les temps de réponse.
                                - Analyse et Visualisation des Données : Exploitation des données pour générer des insights
                                pertinents, avec une attention particulière à la précision et à la pertinence des résultats.
                        </p>
                        <p className={styles.paragraphe}><span color='red' >Technologies</span> : Sql, Mysql </p>
                        <br />
                        <FaMobileAlt className='Desktop' title='Mobile' />
                        <p className={styles.titre}> Développement Mobile</p>
                        <p className={styles.description}>
                                Je possède une solide expérience avec Flutter, une technologie
                                puissante pour développer des applications mobiles multiplateformes.
                                Grâce à Flutter, j&aposai acquis une expertise dans la création d&aposinterfacesjuyh
                                utilisateur élégantes et réactives, ainsi que dans l&aposintégration d&aposAPI et
                                de services backend. Mon utilisation de Flutter me permet de développer des
                                performantes et fluides,
                                tout en optimisant le temps de développement grâce à son architecture unifiée.
                        </p>
                        <p className={styles.paragraphe}><span color='red'> Technologies</span>: Fluter, Dart</p>
                </div>
        );
};

export default Bio;