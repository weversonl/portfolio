import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section className="w-full max-w-xs space-y-3 mb-8">
      <div className="flex gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-slate-700/40 hover:border-slate-400/60 transition-all duration-300">
        <div className="text-slate-300 text-xl flex-shrink-0 flex items-start pt-0.5">
          <AiFillPhone />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-100 font-semibold text-xs mb-0.5">Telefone</h3>
          <p className="text-slate-400 text-xs break-words">(11) 99863-4141</p>
        </div>
      </div>
      
      <div className="flex gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-slate-700/40 hover:border-slate-400/60 transition-all duration-300">
        <div className="text-slate-300 text-xl flex-shrink-0 flex items-start pt-0.5">
          <AiOutlineMail />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-100 font-semibold text-xs mb-0.5">E-mail</h3>
          <p className="text-slate-400 text-xs break-all">weversonlemos10@gmail.com</p>
        </div>
      </div>
      
      <div className="flex gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-slate-700/40 hover:border-slate-400/60 transition-all duration-300">
        <div className="text-slate-300 text-xl flex-shrink-0 flex items-start pt-0.5">
          <AiFillEnvironment />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-100 font-semibold text-xs mb-0.5">Localização</h3>
          <p className="text-slate-400 text-xs break-words">São Paulo / SP</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
