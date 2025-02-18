import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <h2 className="section-title">{t('contactAndMore')}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-heading">{t('letsConnect')}</h3>
          <p className="contact-subheading">{t('alwaysInterestedIn')}</p>
          <ul className="interest-list">
            <li>{t('uxuiDesign')}</li>
            <li>{t('frontendDevelopment')}</li>
            <li>{t('webflowDevelopment')}</li>
            <li>{t('newBusiness')}</li>
          </ul>
          <div className="social-links">
            {/* Add your social media links here */}
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder={t('yourName')} required />
          <input type="email" placeholder={t('yourEmail')} required />
          <textarea placeholder={t('yourMessage')} required></textarea>
          <button type="submit" className="submit-btn">{t('sendMessage')}</button>
        </form>
      </div>
      <Link to="/" className="back-link">
        {t("backToHome")}
      </Link>
    </section>
  );
}

export default Contact;
