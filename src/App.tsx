import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="portfolio-container flex flex-col lg:flex-row min-h-screen">
          <Sidebar />
          <MainContent />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
