import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setIsDropdownOpen(false);
  };

  const navItems = {
    en: ["About", "Skills", "Experience", "Education", "Contact"],
    id: ["Tentang", "Keterampilan", "Pengalaman", "Pendidikan", "Kontak"],
  };

  return (
    <nav className="overflow-hidden bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://github.com/Ayyas-RF"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <g clipPath="url(#akarIconsGithubFill0)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="akarIconsGithubFill0">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CV-OLK
          </span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center p-2 text-sm text-gray-500 dark:text-white rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="relative flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              src={
                language === "en"
                  ? "https://flagcdn.com/w320/us.png"
                  : "https://flagcdn.com/w320/id.png"
              }
              alt={language}
              className="w-5 h-5 rounded-full mr-3"
            />
            {language === "en" ? "English" : "Indonesia"}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 font-medium" role="none">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleLanguageChange("id")}
                  >
                    Indonesia
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            {navItems[language].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;