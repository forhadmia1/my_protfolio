import React from 'react';
import Footer from '../../components/Footer';
import Contact from '../Contact/Contact';
import HeroArea from './HeroArea';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <HeroArea />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;