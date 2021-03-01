import React from 'react';
import HeaderAbout from './HeaderAbout';
import Skills from './Skills';
import '../styles/mystyles.scss';


const AboutSection = () => {
    return (
      <div className="about-container">
        <HeaderAbout />
        <Skills />
      </div>
    );
  }
  
  export default AboutSection;