import React from 'react';
import Header from "../components/Header";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Technologies from '../components/Technologies';
import Footer from '../components/Footer';
import "../Styles/globals.css";

const Homepage = () => (
    <div>
        <Header />
        <main className='container'>
            <Bio />
            <Projects />
            <Technologies />
            <Footer />
        </main>
    </div>
);

export default Homepage;