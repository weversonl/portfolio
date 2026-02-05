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
      }, 250);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={Avatar}
              alt="Weverson Lemos"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 shadow-lg"
            />
            <div>
              <h1 className="text-xl font-bold">Weverson Lemos</h1>
              <p className="text-sm">{t("sidebar.title")}</p>
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
            className="sm:hidden glass-btn p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <HiX
                className={`text-2xl hamburger-icon ${
                  isClosing ? "close" : "open"
                }`}
              />
            ) : (
              <HiMenu className="text-2xl hamburger-icon" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {(isMenuOpen || isClosing) && (
          <div
            className={`sm:hidden mt-4 pt-4 border-t border-white/10 flex flex-col items-center gap-4 ${
              isClosing ? "mobile-menu-exit" : "mobile-menu-enter"
            }`}
          >
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
