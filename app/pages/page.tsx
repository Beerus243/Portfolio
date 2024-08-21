import React from 'react';
import Header from "../components/Header";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Technologies from '../components/Technologies';
import Footer from '../components/Footer';
import "../Styles/globals.css";
import "../Styles/responsive.css";

const Homepage = () => (
    <div>
        <Header/>
            <Bio />
            <Projects />
            <Technologies />
            <Footer />
    </div>
);

export default Homepage;