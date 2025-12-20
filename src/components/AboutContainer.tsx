import { useLanguage } from "../contexts/LanguageContext";

const AboutContainer = () => {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-6 lg:px-12 py-12 lg:py-16 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="space-y-4 content-text leading-relaxed">
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
