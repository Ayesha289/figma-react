import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeatureSection';
import AdvantagesSection from './components/AdvantagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';

function App() {
  return ( 
      <div>
      <Header />
      <div id='home'><HeroSection /></div>
      <div id='features'><FeaturesSection /></div>
      <div id='advantages'><AdvantagesSection /></div>
      <div><TestimonialsSection /></div>
      <div><FAQSection /></div>
      <div id='download'><GetStarted /></div>
        
        
        
        
        
        
        
        <Footer />
      </div>
  );
}

export default App;
