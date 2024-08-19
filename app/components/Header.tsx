import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    return (
    <header className='header'>
        <h1 className='titreHeader'> Fabrice Malanga</h1>
        <div className='header-icons'>
    <a href='https://wa.me/+243991760427' target='_blank' rel='nooper'>
        <FaWhatsapp className="iconH" />
        </a>
        <a href='mailto:malangafabrice@gmail.com' target='_blank' rel='nooper'>
        <FaEnvelope className="iconH" />
    </a>
        </div>
    </header>
);
};

export default Header;