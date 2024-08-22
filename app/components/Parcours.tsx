import React from 'react';
import styles from './Parcours.module.css';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdWorkHistory } from 'react-icons/md';
import { SiFunimation } from 'react-icons/si';

const Parcours: React.FC = () => {
    return(
<>
            <div className='footer-section'>
            <h2 className={styles.Heading}> Et le Parcours de Fabrice ? </h2>
            <IoSchoolSharp className='icon'/>
            <p className={styles.titre} > Scolaire</p>
            <p className={styles.description}>
        Fabrice a fait ses études humanitaires au 
        collège saint Gabriel, a kinshasa. Il a finit
         en option Biochimie avec un diplôme de 68% en 2018. Après
         avoir obtenu son diplôme d'État. Il a toujours su que
          l'informatique était sa passion et a commencé ses études supérieurs à L'ESMICOM où  
          en 2022 il finira par décrocher son diplome de Graduat
            </p>
            <SiFunimation className='icon' />
            <p className={styles.titre}> Extra-Scolaire</p>
            <p className={styles.description}>
            En déhors de la scolarité, Fabrice fait et a fait plusieurs activités.
             Depuis ses 13 ans, il a fait du karaté Shotokan et a bien-sûr
              beaucoup progressé dans le mouvement, passionné de la Callisthénie Fabrice continue
              de travailler chaque jour quand il a un peu de temps libre
                 </p>
            <MdWorkHistory className='icon'/>
            <p className={styles.titre}> Profesionnelle </p>
            <p className={styles.description}>
            Dans le domaine Professionnel Fabrice a travaillé comme membre
             du Bureautique R.com, et passer le reste du temps à donner des 
            cours à domicile sur la conception des bases de données et la 
            création des sites web
            </p>

            </div>


</>
    );

};

export default Parcours;