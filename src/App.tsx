import MainContent from "./components/MainContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useEffect, useState } from "react";

function AppContent() {
  const { language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Atualizar atributo lang do HTML
    document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en-US';
  }, [language]);

  useEffect(() => {
    // Animação de entrada após carregamento
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoaded ? 'page-load-animation' : 'opacity-0'}>
      <MainContent />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
