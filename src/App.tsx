import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-container flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
