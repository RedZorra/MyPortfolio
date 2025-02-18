import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();

  return (
    <div className="about-me-container">
      <main className="about-me-content">
        <section className="about-portfolio-section">
          <h2 className="about-line">{t('aboutMe')}</h2>
          <div className="about-text-container">
            <p className="about-greeting">{t('aboutGreeting')}</p>
            <p className="about-intro">{t('aboutIntro')}</p>
            <p className="about-specialization">{t('aboutSpecialization')}</p>
            <p className="about-expertise">{t('aboutExpertise')}</p>
            <p className="about-interests">{t('aboutInterests')}</p>
          </div>
          <div className="portfolio-section about-image">
            <img  src="./images/ST.jpg" alt={t('aboutImageAlt')} />
          </div>
        </section>
        <Link to="/" className="back-link">{t('backToHome')}</Link>
      </main>
    
    </div>
  );
}

export default About;