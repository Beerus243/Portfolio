import React from 'react';
import Header from "../components/Header";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Technologies from '../components/Technologies';
import "../Styles/globals.css";

const Homepage = () => (
    <div>
        <Header />
        <main className='container'>
            <Bio />
            <Projects />
            <Technologies />
        </main>
    </div>
);

export default Homepage;