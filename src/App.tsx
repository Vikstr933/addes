import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const handleContactSubmit = (data: any) => {
    console.log('Contact form submitted:', data)
  };

  return (
    <div className="app">
      <Hero
        companyName="Malmö Trädgårdsanläggning"
        tagline="Professionell plattsättning och trädgårdsanläggning i Malmö"
        ctaText="Begär offert"
      />
      <Services
        title="Våra Tjänster"
        subtitle="Vi erbjuder kompletta lösningar för din trädgård och uteplats"
      />
      <About
        companyName="Malmö Trädgårdsanläggning"
        foundedYear="2010"
        experience="13+ år"
      />
      <Contact
        companyName="Malmö Trädgårdsanläggning"
        phone="+46 40 123 456"
        email="info@malmoträdgård.se"
        address="Storgatan 123"
        city="Malmö"
        postalCode="211 45"
        onSubmit={handleContactSubmit}
      />
      <Footer
        companyName="Malmö Trädgårdsanläggning"
        phone="+46 40 123 456"
        email="info@malmoträdgård.se"
        address="Storgatan 123"
        city="Malmö"
        postalCode="211 45"
        foundedYear="2010"
      />
    </div>
  )
};

export default App;