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

const technologies = [
  { id: "java", name: "Java", icon: <DiJava />, description: "Desenvolvo em Java há 5 anos. Experiência sólida no desenvolvimento de API's" },
  { id: "spring", name: "SpringBoot", icon: <SiSpring />, description: "Utilizo SpringBoot a 5 anos, para desenvolvimento de REST e GraphQL API's" },
  { id: "docker", name: "Docker", icon: <SiDocker />, description: "Utilizo Docker para ambientes de CI/CD para uma melhor qualidade no desenvolvimento" },
  { id: "linux", name: "Linux", icon: <DiLinux />, description: "Linux é meu sistema operacional principal e estou sempre me aprimorando" },
  { id: "psql", name: "PostgreSQL", icon: <SiPostgresql />, description: "Utilizo o PostgreSQL como uma opção SQL, mas conheço diversas opções SQL" },
  { id: "mongo", name: "MongoDB", icon: <SiMongodb />, description: "Bancos NoSQL, o que mais utilizei foi MongoDB. Mas também utilizo outras opções NoSQL" }
];

const TechnologiesContainer = () => {
  return (
    <section className="w-full px-6 lg:px-12 py-12 lg:py-16 flex justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="section-title">Tecnologias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.id}
              className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/40 hover:border-slate-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/20"
            >
              <div className="flex gap-6">
                <div className="text-slate-300 text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">{tech.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>
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
