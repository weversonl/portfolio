import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useEffect } from "react";

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    // Atualizar atributo lang do HTML
    document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en-US';
  }, [language]);

  return (
    <div className="portfolio-container flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
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
