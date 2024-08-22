import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Footer from '../components/Footer';
import '../Styles/globals.css';
import '../Styles/responsive.css';
import Parcours from '../components/Parcours';

const Homepage = () => (
  <div>
    <Header />
    <Bio />
    <Projects />
    <Technologies />
    <Parcours />
    <Footer />
  </div>
);

export default Homepage;
