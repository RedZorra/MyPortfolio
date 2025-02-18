import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Recipe App",
      category: "Web Development",
      image: "./images/project-item1.jpg",
      link: "https://redzorra.github.io/Recipe-App/",
      description: t("recipeAppDescription"),
    },
    {
      id: 2,
      title: "Aviation Gin",
      category: "React/Tailwind CSS",
      image: "./images/project-item2.jpg",
      link: "https://aviation-gin.onrender.com/",
      description: t("aviationGinDescription"),
    },
    {
      id: 3,
      title: "Scansage",
      category: "Fullstack",
      image: "./images/project-item3.jpg",
      link: "/projects/scansage",
      description: t("scansageDescription"),
    },
    {
      id: 4,
      title: "WordPress Site",
      category: "Web Development",
      image: "./images/projekt-item4.jpg",
      link: "/projects/wordpress",
      description: t("wordpressDescription"),
    },
    {
      id: 5,
      title: "Portfolio",
      category: "UX/UI Design",
      image: "./images/projekt-item5.jpg",
      link: "/projects/portfolio",
      description: t("portfolioDescription"),
    },
  ];

  return (
    <section className="project-portfolio-section">
      <h2>{t("projects")}</h2>
      <div className="project-wrapper">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img
              className="project-item-img"
              src={project.image}
              alt={t(`${project.title}Alt`)}
            />
            <h4>
              {project.link.startsWith("http") ? (
                <a
                  href={project.link}
                  className="project-a focus-in-contract"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(`${project.title}Title`)}
                </a>
              ) : (
                <Link to={project.link} className="project-a focus-in-contract">
                  {t(`${project.title}Title`)}
                </Link>
              )}
            </h4>
            <p className="project-category">
              {t(`${project.category}Category`)}
            </p>
            <p className="project-description">{t(project.description)}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">
        {t("backToHome")}
      </Link>
    </section>
  );
}

export default Projects;
