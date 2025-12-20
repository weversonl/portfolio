import MainContent from "./components/MainContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useEffect } from "react";

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    // Atualizar atributo lang do HTML
    document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en-US';
  }, [language]);

  return <MainContent />;
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
