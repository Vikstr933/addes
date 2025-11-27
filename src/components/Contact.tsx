import React, { useState } from 'react';
import './Contact.css';
import { ContactFormData } from '../types';

interface ContactProps {
  companyName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  onSubmit?: (data: ContactFormData) => void
}

const Contact: React.FC<ContactProps> = ({
  companyName = 'Malmö Trädgårdsanläggning',
  phone = '+46 40 123 456',
  email = 'info@malmoträdgård.se',
  address = 'Storgatan 123',
  city = 'Malmö',
  postalCode = '211 45',
  onSubmit
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  };

  const contactInfo = [
    {
      id: '1',
      icon: '📞',
      title: 'Telefon',
      value: phone,
      link: `tel:${phone.replace(/\s/g, '')}`
    },
    {
      id: '2',
      icon: '✉️',
      title: 'E-post',
      value: email,
      link: `mailto:${email}`
    },
    {
      id: '3',
      icon: '📍',
      title: 'Adress',
      value: `${address}, ${postalCode} ${city}`,
      link: `https://maps.google.com/?q=${encodeURIComponent(`${address}, ${postalCode} ${city}`)}`
    },
    {
      id: '4',
      icon: '🕐',
      title: 'Öppettider',
      value: 'Mån-Fre: 07:00-17:00',
      link: null
    }
  ];

  const services = [
    { value: '', label: 'Välj tjänst' },
    { value: 'plattsättning', label: 'Plattsättning' },
    { value: 'trädgårdsanläggning', label: 'Trädgårdsanläggning' },
    { value: 'murar', label: 'Murar & Stödmurar' },
    { value: 'trädgårdsunderhåll', label: 'Trädgårdsunderhåll' },
    { value: 'övrigt', label: 'Övrigt' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Kontakta Oss</h2>
          <p className="contact-subtitle">
            Har du frågor eller vill ha en kostnadsfri offert? Hör av dig så återkommer vi inom 24 timmar.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-info-header">
              <h3 className="contact-info-title">{companyName}</h3>
              <p className="contact-info-description">
                Vi finns i Malmö och hjälper dig med alla typer av trädgårdsarbeten. Kontakta oss idag för en kostnadsfri konsultation.
              </p>
            </div>

            <div className="contact-info-grid">
              {contactInfo.map(info => (
                <div key={info.id} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="contact-info-value contact-info-link"
                        target={info.title === 'Adress' ? '_blank' : undefined}
                        rel={info.title === 'Adress' ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-cta-box">
              <h4 className="contact-cta-title">Akut trädgårdshjälp?</h4>
              <p className="contact-cta-text">
                Ring oss direkt för snabb hjälp med akuta trädgårdsproblem.
              </p>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-cta-button">
                Ring Nu: {phone}
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Namn <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ditt fullständiga namn"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  E-post <span className="form-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="din.email@exempel.se"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Telefon <span className="form-required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="070-123 45 67"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Tjänst
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message" className="form-label">
                  Meddelande <span className="form-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Beskriv ditt projekt eller din fråga..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-message form-message-success">
                  <span className="form-message-icon">✓</span>
                  Tack för ditt meddelande! Vi återkommer inom 24 timmar.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message form-message-error">
                  <span className="form-message-icon">✕</span>
                  Något gick fel. Vänligen försök igen eller ring oss direkt.
                </div>
              )}

              <button 
                type="submit" 
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="form-submit-spinner"></span>
                    Skickar...
                  </>
                ) : (
                  'Skicka Meddelande'
                )}
              </button>

              <p className="form-privacy">
                Genom att skicka formuläret godkänner du vår hantering av personuppgifter enligt GDPR.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;