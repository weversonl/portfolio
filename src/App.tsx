import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="portfolio-container flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
