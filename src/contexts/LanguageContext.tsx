import { createContext, useContext, useEffect, useState, useMemo, type ReactNode } from 'react';
import { translations, type Language, type TranslationKey } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('pt-BR');

  useEffect(() => {
    // Detectar idioma da URL
    const path = window.location.pathname;
    let detectedLang: Language | null = null;

    if (path.startsWith('/en-us') || path.startsWith('/en')) {
      detectedLang = 'en-US';
    } else if (path.startsWith('/pt-br') || path.startsWith('/pt')) {
      detectedLang = 'pt-BR';
    }

    // Prioridade: URL > localStorage > default
    if (detectedLang) {
      setLanguageState(detectedLang);
      localStorage.setItem('language', detectedLang);
    } else {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage && (savedLanguage === 'pt-BR' || savedLanguage === 'en-US')) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Atualizar URL sem recarregar a página
    const newPath = lang === 'en-US' ? '/en-us' : '/pt-br';
    const currentPath = window.location.pathname;
    
    if (!currentPath.startsWith(newPath)) {
      window.history.pushState({}, '', newPath);
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
