import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

import Avatar from "../assets/img/eu.png";

const Hero = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const cvLink = language === "en-US"
    ? "https://drive.google.com/file/d/10Wpi1Nsq-_2rWbdydXFOrT-Mk8R4xyEE/view?usp=sharing"
    : "https://drive.google.com/file/d/1m2Ssn-kb88Lh8y6es0fEudiilhfhUVOT/view?usp=sharing";

  return (
    <section id="hero" className="w-full min-h-[90vh] flex items-center justify-center px-6 py-8 lg:py-12 pb-[calc(2rem+env(safe-area-inset-bottom))] lg:pb-[calc(3rem+env(safe-area-inset-bottom))]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Weverson Lemos
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-slate-300">
              {t("sidebar.title")}
            </h2>

            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-400">{t("sidebar.phone")}:</span>
                <span className="text-slate-200">(11) 98201-1935</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-400">{t("sidebar.email")}:</span>
                <span className="text-slate-200 break-all">
                  {language === "pt-BR" ? "contato@weverson.dev" : "contact@weverson.dev"}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-400">{t("sidebar.location")}:</span>
                <span className="text-slate-200">São Paulo / SP</span>
              </div>
            </div>

            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-block"
            >
              {t("sidebar.downloadCV")}
            </a>
          </div>

          <div className="flex-shrink-0 relative">
            {/* Glow effect behind avatar */}
            <div
              className={`absolute inset-0 rounded-full blur-3xl scale-110 transition-colors duration-500 ${
                theme === "light"
                  ? "bg-gradient-to-br from-slate-300/40 to-slate-400/30"
                  : "bg-gradient-to-br from-slate-400/30 to-slate-600/30"
              }`}
            />
            <img
              src={Avatar}
              alt="Weverson Lemos"
              className={`relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover avatar-ring ${
                theme === "light" ? "ring-slate-300/50" : "ring-white/20"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
