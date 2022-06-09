import React from 'react';
import Footer from '../../components/Footer';
import Contact from '../Contact/Contact';
import HeroArea from './HeroArea';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <HeroArea />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;