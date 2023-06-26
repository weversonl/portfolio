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

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "java", name: "Java", icon: <DiJava />, description: "Desenvolvo em Java há 2 anos. Experiência sólida no desenvolvimento de API's" },
  { id: "spring", name: "SpringBoot", icon: <SiSpring />, description: "Utilizo SpringBoot a pelo menos 2 anos, para desenvolvimento de REST e GraphQL API's" },
  { id: "docker", name: "Docker", icon: <SiDocker />, description: "Utilizei Docker para aprimorar ambientes de CI/CD e garantir melhor qualidade no desenvolvimento" },
  { id: "linux", name: "Linux", icon: <DiLinux />, description: "Linux é meu sistema operacional principal e estudo constantemente para aprimorar meus conhecimentos nele" },
  { id: "psql", name: "PostgreSQL", icon: <SiPostgresql />, description: "Utilizei amplamente o PostgreSQL como uma opção SQL em muitos dos projetos que desenvolvi" },
  { id: "mongo", name: "MongoDB", icon: <SiMongodb />, description: "Em outros projetos, optei por bancos de dados NoSQL, como o MongoDB, para atender às necessidades específicas" }
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
