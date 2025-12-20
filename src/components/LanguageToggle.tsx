import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`language-btn ${language === 'pt-BR' ? 'active' : ''}`}
        title="Português (Brasil)"
      >
        🇧🇷
      </button>
      <button
        onClick={() => setLanguage('en-US')}
        className={`language-btn ${language === 'en-US' ? 'active' : ''}`}
        title="English (US)"
      >
        🇺🇸
      </button>
    </div>
  );
};
