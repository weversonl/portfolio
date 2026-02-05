import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import type { RefObject } from "react";

const AboutContainer = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      id="about"
      className={`w-full px-6 py-8 lg:py-16 flex justify-center glass-section scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container max-w-6xl">
        <h2 className="section-title">{t("about.title")}</h2>
        <div className="space-y-6 content-text leading-relaxed text-lg">
          <p>{t("about.text1")}</p>
          <p>{t("about.text2")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
