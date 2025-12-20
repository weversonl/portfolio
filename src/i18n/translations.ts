export type Language = 'pt-BR' | 'en-US';

export type TranslationKey = 
  | 'sidebar.title'
  | 'sidebar.phone'
  | 'sidebar.email'
  | 'sidebar.location'
  | 'sidebar.downloadCV'
  | 'about.title'
  | 'about.text1'
  | 'about.text2'
  | 'tech.title'
  | 'tech.java.name'
  | 'tech.java.desc'
  | 'tech.spring.name'
  | 'tech.spring.desc'
  | 'tech.docker.name'
  | 'tech.docker.desc'
  | 'tech.linux.name'
  | 'tech.linux.desc'
  | 'tech.psql.name'
  | 'tech.psql.desc'
  | 'tech.mongo.name'
  | 'tech.mongo.desc'
  | 'projects.title'
  | 'projects.text'
  | 'projects.button';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  'pt-BR': {
    'sidebar.title': 'Desenvolvedor Backend',
    'sidebar.phone': 'Telefone',
    'sidebar.email': 'E-mail',
    'sidebar.location': 'Localização',
    'sidebar.downloadCV': 'Download currículo',
    'about.title': 'Sobre',
    'about.text1': 'Sou um desenvolvedor Java com cinco anos de experiência e uma verdadeira paixão por aprender e inovar. Desde a infância, a tecnologia sempre foi uma constante na minha vida, começando com a resolução de problemas no Windows e a otimização do meu hardware modesto. Com a transição para o Linux, mergulhei na criação de scripts de automação e soluções personalizadas, aprimorando minha eficiência diária. Hoje, minha dedicação ao desenvolvimento de software reflete meu compromisso em encontrar soluções criativas e eficazes através de estudos contínuos e inovação.',
    'about.text2': 'Com um sólido conhecimento em Java e uma forte base nas melhores práticas de programação, minha experiência me permite explorar novas tecnologias e frameworks com entusiasmo. Estou sempre em busca das melhores soluções e colaborando com desenvolvedores talentosos para criar soluções de software de alta qualidade que agregam valor real aos usuários. Meu objetivo é continuar evoluindo como profissional e contribuir para o avanço da tecnologia com soluções eficientes e bem elaboradas.',
    'tech.title': 'Tecnologias',
    'tech.java.name': 'Java',
    'tech.java.desc': 'Desenvolvo em Java há 5 anos. Experiência sólida no desenvolvimento de API\'s',
    'tech.spring.name': 'SpringBoot',
    'tech.spring.desc': 'Utilizo SpringBoot a 5 anos, para desenvolvimento de REST e GraphQL API\'s',
    'tech.docker.name': 'Docker',
    'tech.docker.desc': 'Utilizo Docker para ambientes de CI/CD para uma melhor qualidade no desenvolvimento',
    'tech.linux.name': 'Linux',
    'tech.linux.desc': 'Linux é meu sistema operacional principal e estou sempre me aprimorando',
    'tech.psql.name': 'PostgreSQL',
    'tech.psql.desc': 'Utilizo o PostgreSQL como uma opção SQL, mas conheço diversas opções SQL',
    'tech.mongo.name': 'MongoDB',
    'tech.mongo.desc': 'Bancos NoSQL, o que mais utilizei foi MongoDB. Mas também utilizo outras opções NoSQL',
    'projects.title': 'Projetos',
    'projects.text': 'A seguir, compartilho alguns dos meus projetos pessoais que desenvolvi. A maioria deles é focada no backend, mas em alguns casos, também integrei um frontend para melhorar a experiência de navegação dos usuários.',
    'projects.button': 'Ver Projetos',
  },
  'en-US': {
    'sidebar.title': 'Backend Developer',
    'sidebar.phone': 'Phone',
    'sidebar.email': 'Email',
    'sidebar.location': 'Location',
    'sidebar.downloadCV': 'Download Resume',
    'about.title': 'About',
    'about.text1': 'I am a Java developer with five years of experience and a true passion for learning and innovating. Since childhood, technology has always been a constant in my life, starting with solving problems on Windows and optimizing my modest hardware. With the transition to Linux, I delved into creating automation scripts and personalized solutions, improving my daily efficiency. Today, my dedication to software development reflects my commitment to finding creative and effective solutions through continuous study and innovation.',
    'about.text2': 'With solid knowledge in Java and a strong foundation in best programming practices, my experience allows me to explore new technologies and frameworks with enthusiasm. I am always looking for the best solutions and collaborating with talented developers to create high-quality software solutions that add real value to users. My goal is to continue evolving as a professional and contribute to the advancement of technology with efficient and well-crafted solutions.',
    'tech.title': 'Technologies',
    'tech.java.name': 'Java',
    'tech.java.desc': 'I\'ve been developing in Java for 5 years. Solid experience in API development',
    'tech.spring.name': 'SpringBoot',
    'tech.spring.desc': 'I\'ve been using SpringBoot for 5 years for REST and GraphQL API development',
    'tech.docker.name': 'Docker',
    'tech.docker.desc': 'I use Docker for CI/CD environments for better development quality',
    'tech.linux.name': 'Linux',
    'tech.linux.desc': 'Linux is my main operating system and I\'m always improving',
    'tech.psql.name': 'PostgreSQL',
    'tech.psql.desc': 'I use PostgreSQL as an SQL option, but I know several SQL options',
    'tech.mongo.name': 'MongoDB',
    'tech.mongo.desc': 'NoSQL databases, the one I used most was MongoDB. But I also use other NoSQL options',
    'projects.title': 'Projects',
    'projects.text': 'Below, I share some of my personal projects that I developed. Most of them are backend-focused, but in some cases, I also integrated a frontend to improve the user browsing experience.',
    'projects.button': 'View Projects',
  },
};
