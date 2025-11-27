import React from 'react';
import './Footer.css';

interface FooterProps {
  companyName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  foundedYear?: string
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'Malmö Trädgårdsanläggning',
  phone = '+46 40 123 456',
  email = 'info@malmoträdgård.se',
  address = 'Storgatan 123',
  city = 'Malmö',
  postalCode = '211 45',
  foundedYear = '2010'
}) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: '1',
      name: 'Facebook',
      icon: '📘',
      url: 'https://facebook.com',
      ariaLabel: 'Besök oss på Facebook'
    },
    {
      id: '2',
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com',
      ariaLabel: 'Följ oss på Instagram'
    },
    {
      id: '3',
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com',
      ariaLabel: 'Anslut med oss på LinkedIn'
    }
  ];

  const quickLinks = [
    { id: '1', text: 'Tjänster', href: '#services' },
    { id: '2', text: 'Om Oss', href: '#about' },
    { id: '3', text: 'Kontakt', href: '#contact' },
    { id: '4', text: 'Offertförfrågan', href: '#contact' }
  ];

  const services = [
    { id: '1', text: 'Plattsättning', href: '#services' },
    { id: '2', text: 'Trädgårdsanläggning', href: '#services' },
    { id: '3', text: 'Murar & Stödmurar', href: '#services' },
    { id: '4', text: 'Underhåll', href: '#services' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3 className="footer-logo">{companyName}</h3>
            <p className="footer-description">
              Professionell plattsättning och trädgårdsanläggning i Malmö sedan {foundedYear}. Vi skapar vackra och hållbara utemiljöer.
            </p>
            <div className="footer-social">
              <h4 className="footer-social-title">Följ oss</h4>
              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                  >
                    <span className="footer-social-icon" role="img" aria-hidden="true">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h4 className="footer-section-title">Snabblänkar</h4>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.id} className="footer-list-item">
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-services">
            <h4 className="footer-section-title">Våra Tjänster</h4>
            <ul className="footer-list">
              {services.map((service) => (
                <li key={service.id} className="footer-list-item">
                  <a
                    href={service.href}
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, service.href)}
                  >
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4 className="footer-section-title">Kontakta Oss</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon" role="img" aria-label="Telefon">📞</span>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="footer-contact-link">
                  {phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon" role="img" aria-label="Email">✉️</span>
                <a href={`mailto:${email}`} className="footer-contact-link">
                  {email}
                </a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon" role="img" aria-label="Adress">📍</span>
                <span className="footer-contact-text">
                  {address}<br />
                  {postalCode} {city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {companyName}. Alla rättigheter förbehållna.
          </p>
          <div className="footer-legal">
            <a href="#privacy" className="footer-legal-link">Integritetspolicy</a>
            <span className="footer-legal-separator">•</span>
            <a href="#terms" className="footer-legal-link">Användarvillkor</a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;