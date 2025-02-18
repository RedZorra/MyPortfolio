import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };


  return (
    <div>
      <nav className="navbar">
        <span className="h5">Sophie Stier</span>

        <span className="h4">Fullstack Developer</span>
        <div>
          <ul>
            <li className="list-item">
              <a className="list-a-head" onClick={() => handleNavigation('/projects')}>
                {t("projects")}
              </a>
            </li>
            <li className="list-item">
              <a className="list-a-head" onClick={() => handleNavigation('/about')}>
                {t("about")}
              </a>
            </li>
            <li className="list-item">
              <a className="list-a-head" onClick={() => handleNavigation('/contact')}>
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="language-switcher">
          <button
            className={`btn-language ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={`btn-language ${i18n.language === 'de' ? 'active' : ''}`}
            onClick={() => changeLanguage("de")}
          >
            DE
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
