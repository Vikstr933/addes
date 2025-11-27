import React from 'react';
import './About.css';

interface AboutProps {
  companyName?: string;
  foundedYear?: string;
  experience?: string
}

const About: React.FC<AboutProps> = ({
  companyName = 'Malmö Trädgårdsanläggning',
  foundedYear = '2010',
  experience = '13+ år'
}) => {
  const whyChooseUs = [
    {
      id: '1',
      icon: '✓',
      title: 'Erfaren Personal',
      description: 'Vårt team har över 13 års erfarenhet av plattsättning och trädgårdsanläggning i Malmö-området.'
    },
    {
      id: '2',
      icon: '✓',
      title: 'Kvalitetsgaranti',
      description: 'Vi använder endast högkvalitativa material och garanterar hållbara resultat som håller i många år.'
    },
    {
      id: '3',
      icon: '✓',
      title: 'Lokalt Företag',
      description: 'Som lokalt företag i Malmö känner vi till områdets förutsättningar och kan ge bästa möjliga råd.'
    },
    {
      id: '4',
      icon: '✓',
      title: 'Fri Konsultation',
      description: 'Vi erbjuder kostnadsfri konsultation och offert för alla projekt, stora som små.'
    }
  ];

  const stats = [
    { label: 'Nöjda Kunder', value: '500+' },
    { label: 'Års Erfarenhet', value: experience },
    { label: 'Projekt Genomförda', value: '800+' },
    { label: 'Garantitid', value: '5 år' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Om {companyName}</h2>
          <p className="about-subtitle">
            Ditt lokala val för professionell plattsättning och trädgårdsanläggning i Malmö
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <div className="about-story-text">
              <h3 className="about-story-title">Vår Historia</h3>
              <p className="about-story-paragraph">
                Sedan {foundedYear} har vi hjälpt hundratals familjer och företag i Malmö att förverkliga sina drömmar om vackra uteplatser och trädgårdar. Vi startade som ett litet familjeföretag med en passion för trädgårdsarbete och har vuxit till att bli en av de mest betrodda aktörerna inom plattsättning och trädgårdsanläggning i regionen.
              </p>
              <p className="about-story-paragraph">
                Vår filosofi är enkel: kvalitet, pålitlighet och kundnöjdhet kommer alltid först. Vi tar oss tid att lyssna på våra kunders önskemål och arbetar nära dem genom hela projektet för att säkerställa att resultatet överträffar förväntningarna.
              </p>
              <p className="about-story-paragraph">
                Varje projekt är unikt och vi anpassar våra lösningar efter dina specifika behov och förutsättningar. Oavsett om det handlar om en liten uteplats eller en komplett trädgårdsanläggning, får du samma professionella bemötande och höga kvalitet.
              </p>
            </div>
            <div className="about-story-image">
              <div className="about-image-placeholder">
                <span className="about-image-icon">🏡</span>
                <p className="about-image-text">Professionell trädgårdsanläggning sedan {foundedYear}</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card">
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="about-why">
            <h3 className="about-why-title">Varför Välja Oss?</h3>
            <div className="about-why-grid">
              {whyChooseUs.map((reason) => (
                <div key={reason.id} className="about-why-card">
                  <div className="about-why-icon">{reason.icon}</div>
                  <h4 className="about-why-card-title">{reason.title}</h4>
                  <p className="about-why-card-description">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-commitment">
            <div className="about-commitment-content">
              <h3 className="about-commitment-title">Vårt Löfte Till Dig</h3>
              <p className="about-commitment-text">
                Vi lovar att alltid leverera högsta kvalitet i varje projekt. Från första konsultationen till slutbesiktningen står vi vid din sida. Vi använder endast beprövade metoder och material av högsta kvalitet för att säkerställa att ditt projekt blir precis som du föreställt dig - eller ännu bättre.
              </p>
              <div className="about-commitment-features">
                <div className="about-commitment-feature">
                  <span className="about-commitment-feature-icon">🛡️</span>
                  <span className="about-commitment-feature-text">5 års garanti på allt arbete</span>
                </div>
                <div className="about-commitment-feature">
                  <span className="about-commitment-feature-icon">💼</span>
                  <span className="about-commitment-feature-text">Fullständigt försäkrade</span>
                </div>
                <div className="about-commitment-feature">
                  <span className="about-commitment-feature-icon">📋</span>
                  <span className="about-commitment-feature-text">Skriftliga offerter och avtal</span>
                </div>
                <div className="about-commitment-feature">
                  <span className="about-commitment-feature-icon">🤝</span>
                  <span className="about-commitment-feature-text">Personlig projektledare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;