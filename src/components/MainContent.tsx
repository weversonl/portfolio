import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";

const MainContent = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer />
      </main>
      <Footer />
    </div>
  );
};

export default MainContent;
