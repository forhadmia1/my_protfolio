import React from 'react';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import HeroArea from '../../components/HeroArea';
import Projects from '../../components/Projects';
import Services from '../../components/Services';
import Skills from '../../components/Skills';

const Home = () => {
    return (
        <div>
            <HeroArea />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;