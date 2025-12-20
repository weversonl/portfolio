import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import ThemeToggle from "./ThemeToggle";

import Avatar from "../assets/img/eu.png";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-80 p-8 lg:min-h-screen flex flex-col items-center border-b lg:border-b-0 lg:border-r">
      <div className="w-full flex justify-end mb-4">
        <ThemeToggle />
      </div>
      
      <img
        src={Avatar}
        alt="Weverson Lemos"
        className="w-44 h-44 rounded-full object-cover mb-8 ring-4 ring-slate-400 shadow-2xl shadow-slate-400/30"
      />
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-2">
        Weverson Lemos
      </h1>
      <p className="font-semibold text-lg mb-10 text-center">
        Desenvolvedor Backend
      </p>

      <SocialNetworkContainer />
      <InformationContainer />

      <a
        href="https://drive.google.com/file/d/1m2Ssn-kb88Lh8y6es0fEudiilhfhUVOT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-auto w-full lg:w-full text-center"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
