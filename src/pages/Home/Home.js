import React from 'react';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import HeroArea from '../../components/HeroArea';
import Skills from '../../components/Skills';
import Projects from './Projects';
import Services from './Services';

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