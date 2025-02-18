import { useTranslation } from "react-i18next";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sophie-stier-582309332/" },
    { name: "Github", icon: <FaGithub />, url: "https://github.com/RedZorra" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-text">
          <h4>{t("projectQuestion")}</h4>
          <p>{t("contactInvitation")}</p>
        </div>
        <div className="footer-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="social-link"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Sophie Stier.{" "}
          {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;