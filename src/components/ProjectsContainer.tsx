import { useLanguage } from "../contexts/LanguageContext";

const ProjectsContainer = () => {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-6 lg:px-12 py-12 lg:py-16 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="content-text mb-8 leading-relaxed">
          {t('projects.text')}
        </p>
        <a 
          href="https://github.com/WeversonL?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {t('projects.button')}
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
