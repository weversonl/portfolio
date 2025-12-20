import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const AboutContainer = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="about" 
      className={`w-full px-6 py-20 lg:py-32 flex justify-center bg-slate-900/30 light:bg-slate-100/30 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="container max-w-6xl">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="space-y-6 content-text leading-relaxed text-lg">
          <p>
            {t('about.text1')}
          </p>
          <p>
            {t('about.text2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
