const ProjectsContainer = () => {
  return (
    <section className="w-full px-6 lg:px-12 py-12 lg:py-16 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="section-title">Projetos</h2>
        <p className="text-slate-300 mb-8 leading-relaxed">
          A seguir, compartilho alguns dos meus projetos pessoais que desenvolvi. A maioria deles é focada no backend, mas em alguns casos, também integrei um frontend para melhorar a experiência de navegação dos usuários.
        </p>
        <a 
          href="https://github.com/WeversonL?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Ver Projetos
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
