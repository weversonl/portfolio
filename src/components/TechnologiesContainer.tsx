import {
  DiJava,
  DiLinux
} from "react-icons/di";

import { 
  SiSpring,
  SiDocker,
  SiPostgresql,
  SiMongodb
} from "react-icons/si"

import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TechnologiesContainer = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  const technologies = [
    { id: "java", name: t('tech.java.name'), icon: <DiJava />, description: t('tech.java.desc') },
    { id: "spring", name: t('tech.spring.name'), icon: <SiSpring />, description: t('tech.spring.desc') },
    { id: "docker", name: t('tech.docker.name'), icon: <SiDocker />, description: t('tech.docker.desc') },
    { id: "linux", name: t('tech.linux.name'), icon: <DiLinux />, description: t('tech.linux.desc') },
    { id: "psql", name: t('tech.psql.name'), icon: <SiPostgresql />, description: t('tech.psql.desc') },
    { id: "mongo", name: t('tech.mongo.name'), icon: <SiMongodb />, description: t('tech.mongo.desc') }
  ];
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="technologies" 
      className={`w-full px-6 py-20 lg:py-32 flex justify-center scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="container max-w-6xl">
        <h2 className="section-title">{t('tech.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <div 
              key={tech.id}
              className="tech-card group p-6 rounded-xl border hover:border-slate-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/20"
            >
              <div className="flex gap-6">
                <div className="tech-card-icon text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <h3 className="tech-card-title font-bold text-lg mb-2">{tech.name}</h3>
                  <p className="tech-card-text text-sm leading-relaxed">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesContainer;
