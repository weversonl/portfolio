import { useLanguage } from "../contexts/LanguageContext";

const BrazilFlag = () => (
  <svg className="w-5 h-5" viewBox="0 0 36 24" fill="none" aria-hidden="true">
    <rect width="36" height="24" fill="#009B3A" />
    <path d="M18 2L33 12L18 22L3 12L18 2Z" fill="#FEDF00" />
    <circle cx="18" cy="12" r="5" fill="#002776" />
    <path
      d="M13 12C13 12 15 10 18 10C21 10 23 12 23 12"
      stroke="white"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

const USAFlag = () => (
  <svg className="w-5 h-5" viewBox="0 0 36 24" fill="none" aria-hidden="true">
    <rect width="36" height="24" fill="#B22234" />
    <path
      d="M0 2.77h36M0 5.54h36M0 8.31h36M0 11.08h36M0 13.85h36M0 16.62h36M0 19.39h36"
      stroke="white"
      strokeWidth="1.85"
    />
    <rect width="14.4" height="12.92" fill="#3C3B6E" />
  </svg>
);

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 items-center justify-center">
      <button
        onClick={() => setLanguage("pt-BR")}
        className={`language-btn ${language === "pt-BR" ? "active" : ""}`}
        title="Português (Brasil)"
        aria-label="Mudar idioma para Português"
      >
        <BrazilFlag />
      </button>
      <button
        onClick={() => setLanguage("en-US")}
        className={`language-btn ${language === "en-US" ? "active" : ""}`}
        title="English (US)"
        aria-label="Change language to English"
      >
        <USAFlag />
      </button>
    </div>
  );
};
