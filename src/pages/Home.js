import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import HeroArea from '../components/HeroArea';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroArea />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;