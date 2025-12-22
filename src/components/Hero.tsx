import { useLanguage } from "../contexts/LanguageContext";

import Avatar from "../assets/img/eu.png";

const Hero = () => {
  const { t, language } = useLanguage();

  const cvLink = language === "en-US"
    ? "https://drive.google.com/file/d/10Wpi1Nsq-_2rWbdydXFOrT-Mk8R4xyEE/view?usp=sharing"
    : "https://drive.google.com/file/d/1m2Ssn-kb88Lh8y6es0fEudiilhfhUVOT/view?usp=sharing";

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center px-6 py-20">
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
                <span className="text-slate-200">(11) 99863-4141</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-400">{t("sidebar.email")}:</span>
                <span className="text-slate-200 break-all">
                  weversonlemos10@gmail.com
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

          <div className="flex-shrink-0">
            <img
              src={Avatar}
              alt="Weverson Lemos"
              className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover ring-8 ring-slate-400 shadow-2xl shadow-slate-400/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
