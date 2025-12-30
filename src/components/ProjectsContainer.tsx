import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectsContainer = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`w-full px-6 py-20 lg:py-32 flex justify-center bg-slate-900/30 light:bg-slate-100/30 scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container max-w-6xl">
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="content-text mb-10 leading-relaxed text-lg">
          {t("projects.text")}
        </p>
        <a
          href="https://github.com/weversonl"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {t("projects.button")}
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
