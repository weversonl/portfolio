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
  { id: "java", name: "Java", icon: <DiJava className="icon-tech" />, description: "Desenvolvo em Java há 3 anos. Experiência sólida no desenvolvimento de API's" },
  { id: "spring", name: "SpringBoot", icon: <SiSpring className="icon-tech" />, description: "Utilizo SpringBoot a 3 anos, para desenvolvimento de REST e GraphQL API's" },
  { id: "docker", name: "Docker", icon: <SiDocker className="icon-tech" />, description: "Utilizo Docker para ambientes de CI/CD para uma melhor qualidade no desenvolvimento" },
  { id: "linux", name: "Linux", icon: <DiLinux className="icon-tech" />, description: "Linux é meu sistema operacional principal e estou sempre me aprimorando" },
  { id: "psql", name: "PostgreSQL", icon: <SiPostgresql className="icon-tech" />, description: "Utilizo o PostgreSQL como uma opção SQL, mas conheço diversas opções SQL" },
  { id: "mongo", name: "MongoDB", icon: <SiMongodb className="icon-tech" />, description: "Bancos NoSQL, o que mais utilizei foi MongoDB. Mas também utilizo outras opções NoSQL" }
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
