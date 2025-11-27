import React from 'react';
import './Hero.css';

interface HeroProps {
  companyName?: string;
  tagline?: string;
  ctaText?: string;
  onCtaClick?: () => void
}

const Hero: React.FC<HeroProps> = ({
  companyName = 'Malmö Trädgårdsanläggning',
  tagline = 'Professionell plattsättning och trädgårdsanläggning i Malmö',
  ctaText = 'Begär offert',
  onCtaClick
}) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick()
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-container">
          <h1 className="hero-title">{companyName}</h1>
          <p className="hero-tagline">{tagline}</p>
          <p className="hero-description">
            Vi skapar vackra uteplatser och trädgårdar med expertis i plattsättning,
            trädgårdsdesign och anläggning. Över 15 års erfarenhet i Malmö-området.
          </p>
          <div className="hero-cta">
            <button 
              className="hero-button hero-button-primary" 
              onClick={handleCtaClick}
              aria-label={ctaText}
            >
              {ctaText}
            </button>
            <a 
              href="tel:+46701234567" 
              className="hero-button hero-button-secondary"
              aria-label="Ring oss"
            >
              Ring oss
            </a>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span className="hero-feature-text">15+ års erfarenhet</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span className="hero-feature-text">Gratis offert</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span className="hero-feature-text">Kvalitetsgaranti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;