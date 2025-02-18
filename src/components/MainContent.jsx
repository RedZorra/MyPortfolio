import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import SkillBar from "../views/SkillBar.jsx";
import ReactSkillbar from "react-skillbars";

function MainContent() {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const fullText = t("sophistication");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  const skills = [
    { type: "HTML", level: 90 },
    { type: "CSS3", level: 80 },
    { type: "JavaScript", level: 70 },
    { type: "React", level: 70 },
    { type: "Bootstrap", level: 50 },
    { type: "Node.js", level: 50 },
    { type: "MongoDB", level: 70 },
    { type: "Express", level: 70 },
    { type: "RESTfulAPIs", level: 60 },
    { type: "Docker", level: 30 },
    { type: "Wordpress", level: 30 },
   
  ];


  return (
    <main className="main-content">
      <section className="slogan-container">
        <h1 className="slogan">
          <span className="gradient-text">{t("webDesign")}</span>
          {t("with")} {t("an")} {t("aura")} {t("of")}
          <span className="linear-text typewriter">{text}</span>
        </h1>
      </section>
      <section className="skills-section">
        <h2>{t("mySkills")}</h2>
        <ReactSkillbar
          skills={skills}
          colors={{
            bar: "#f13e3e",
            title: {
              text: "#fff",
              background: "#0c0c0c",
            },
          }}
          height={20}
          animationDuration={1500}
          animationDelay={300}
        />
      </section>
    </main>
  );
}

export default MainContent;
