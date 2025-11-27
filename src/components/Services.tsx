import React from 'react';
import './Services.css';
import { Service } from '../types';

interface ServicesProps {
  services?: Service[];
  title?: string;
  subtitle?: string
}

const defaultServices: Service[] = [
  {
    id: '1',
    title: 'Plattsättning',
    description: 'Professionell läggning av plattor för uteplatser, gångar och entréer. Vi arbetar med alla typer av plattor och natursten.',
    icon: '🏗️',
    features: [
      'Uteplatser och terrasser',
      'Gångvägar och entréer',
      'Natursten och betongplattor',
      'Dränering och underlag'
    ]
  },
  {
    id: '2',
    title: 'Trädgårdsanläggning',
    description: 'Komplett trädgårdsanläggning från planering till färdig trädgård. Vi skapar gröna miljöer som passar ditt hem.',
    icon: '🌳',
    features: [
      'Trädgårdsdesign och planering',
      'Plantering av träd och buskar',
      'Gräsmattor och rabatter',
      'Bevattningssystem'
    ]
  },
  {
    id: '3',
    title: 'Murar & Stödmurar',
    description: 'Byggande av murar och stödmurar i natursten eller betong. Både funktionella och estetiskt tilltalande lösningar.',
    icon: '🧱',
    features: [
      'Naturstensmurar',
      'Stödmurar och nivåskillnader',
      'Trädgårdsmurrar',
      'Upphöjda planteringar'
    ]
  },
  {
    id: '4',
    title: 'Trädgårdsskötsel',
    description: 'Regelbunden skötsel och underhåll av din trädgård. Vi ser till att din trädgård alltid ser fräsch och välskött ut.',
    icon: '✂️',
    features: [
      'Gräsklippning',
      'Beskärning av buskar',
      'Ogräsrensning',
      'Säsongsplantering'
    ]
  },
  {
    id: '5',
    title: 'Dränering',
    description: 'Professionell dränering för att undvika vattensamlingar och fuktproblem. Vi säkerställer rätt avrinning.',
    icon: '💧',
    features: [
      'Dräneringssystem',
      'Dagvattenhantering',
      'Slänter och avrinning',
      'Fuktskydd'
    ]
  },
  {
    id: '6',
    title: 'Belysning',
    description: 'Utomhusbelysning som skapar stämning och trygghet. Vi installerar energieffektiv LED-belysning.',
    icon: '💡',
    features: [
      'Trädgårdsbelysning',
      'Väg- och entrébelysning',
      'Accentbelysning',
      'Smart styrning'
    ]
  }
];

const Services: React.FC<ServicesProps> = ({
  services = defaultServices,
  title = 'Våra Tjänster',
  subtitle = 'Vi erbjuder kompletta lösningar för din trädgård och uteplats'
}) => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{title}</h2>
          <p className="services-subtitle">{subtitle}</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span className="service-icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              {service.features && service.features.length > 0 && (
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button className="service-button">
                Läs mer
              </button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3 className="services-cta-title">Redo att börja ditt projekt?</h3>
          <p className="services-cta-text">
            Kontakta oss idag för en kostnadsfri konsultation och offert
          </p>
          <button className="services-cta-button">
            Begär offert
          </button>
        </div>
      </div>
    </section>
  )
};

export default Services;