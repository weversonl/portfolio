import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { useLanguage } from "../contexts/LanguageContext";

const InformationContainer = () => {
  const { t } = useLanguage();
  
  return (
    <section className="w-full max-w-xs space-y-3 mb-8">
      <div className="info-card flex gap-3 p-3 rounded-lg border hover:border-slate-400/60 transition-all duration-300">
        <div className="info-card-icon text-xl flex-shrink-0 flex items-start pt-0.5">
          <AiFillPhone />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="info-card-title font-semibold text-xs mb-0.5">{t('sidebar.phone')}</h3>
          <p className="info-card-text text-xs break-words">(11) 99863-4141</p>
        </div>
      </div>
      
      <div className="info-card flex gap-3 p-3 rounded-lg border hover:border-slate-400/60 transition-all duration-300">
        <div className="info-card-icon text-xl flex-shrink-0 flex items-start pt-0.5">
          <AiOutlineMail />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="info-card-title font-semibold text-xs mb-0.5">{t('sidebar.email')}</h3>
          <p className="info-card-text text-xs break-all">weversonlemos10@gmail.com</p>
        </div>
      </div>
      
      <div className="info-card flex gap-3 p-3 rounded-lg border hover:border-slate-400/60 transition-all duration-300">
        <div className="info-card-icon text-xl flex-shrink-0 flex items-start pt-0.5">
          <AiFillEnvironment />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="info-card-title font-semibold text-xs mb-0.5">{t('sidebar.location')}</h3>
          <p className="info-card-text text-xs break-words">São Paulo / SP</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
