"use client";

import { useState, useEffect, useContext } from "react";
// components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import LanguageContext from "./LanguageContext";

const header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('currentLang', newLanguage);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem('currentLang') || 'no';
    console.log(lang)
    setLanguage(lang);
  }, []);

  return (
    <header
      className={`${
        header
         ? "py-4 bg-white shadow-lg  dark:bg-accent" 
         : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <ThemeToggler />
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
              {language?.toUpperCase() ?? "NO"}
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 w-14 mt-2 bg-white shadow-lg rounded-md overflow-hidden">
                  {["no", "pu", "en"].map((language) => (
                    <li key={language} className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={() => handleLanguageChange(language)}>
                      {language.toUpperCase()}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
