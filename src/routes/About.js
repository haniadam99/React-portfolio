import React from 'react';
import EduAndExp from '../components/EduAndExp';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <EduAndExp />
    </div>
  );
};

export default About;
