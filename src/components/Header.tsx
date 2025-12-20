import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import { useLanguage } from "../contexts/LanguageContext";
import Avatar from "../assets/img/eu.png";

import SocialNetworkContainer from "./SocialNetworkContainer";
import ThemeToggle from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };
  
  return (
    <header className="w-full border-b sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={Avatar}
              alt="Weverson Lemos"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-400"
            />
            <div>
              <h1 className="text-xl font-bold">Weverson Lemos</h1>
              <p className="text-sm text-slate-400">{t('sidebar.title')}</p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-4">
            <SocialNetworkContainer />
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-slate-100 transition-all duration-300"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <HiX className={`text-2xl hamburger-icon ${isClosing ? 'close' : 'open'}`} />
            ) : (
              <HiMenu className="text-2xl hamburger-icon" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {(isMenuOpen || isClosing) && (
          <div className={`sm:hidden mt-4 pt-4 border-t border-slate-800 flex flex-col items-center gap-4 ${isClosing ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <SocialNetworkContainer />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
