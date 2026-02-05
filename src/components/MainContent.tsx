import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import FloatingMenu from "./FloatingMenu";

const MainContent = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <AboutContainer />
        </div>
        <div id="technologies">
          <TechnologiesContainer />
        </div>
        <div id="projects">
          <ProjectsContainer />
        </div>
      </main>
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default MainContent;
