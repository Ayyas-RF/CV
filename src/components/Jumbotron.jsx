<<<<<<< Updated upstream
// src/components/Jumbotron.js

import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Import the language context
=======
import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
>>>>>>> Stashed changes
import "./css/jumbotron.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Jumbotron = () => {
  const { language } = useLanguage(); // Get the current language

  // Texts for different languages
  const texts = {
    en: {
      greeting: "Greetings",
      rest: "! I'm Ayyas Rasydan Fayadhi",
      description:
        "As a person who passionate into software development field, and interested in open-source/FOSS world, will always try to develop and inovate on software world",
      downloadCv: "Download CV"
    },
    id: {
      greeting: "Haloo",
      rest: "! Namaku Ayyas Rasydan Fayadhi",
      description:
        "Sebagai seseorang yang memiliki minat dalam bidang pengembangan perangkat lunak, dan tertarik dalam dunia open-source/FOSS, akan selalu mencoba mengembangkan dan berinovasi dalam dunia perangkat lunak",
      downloadCv: "Unduh CV"
    }
  };

  const greetingText = texts[language].greeting.split("");
<<<<<<< Updated upstream
=======

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
>>>>>>> Stashed changes

  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden">
      <img
        className="rounded-full w-48 h-48 mx-auto mt-10 object-cover"
<<<<<<< Updated upstream
        src="src/assets/pp.jpg"
        alt="image description"
      />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {/* Render greeting with sequential animation */}
=======
        src="/pp.jpg"
        data-aos="fade-up"
        data-aos-delay="200"
        alt="image description"
      />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          data-aos="fade-in"
          data-aos-delay="300"
        >
>>>>>>> Stashed changes
          {greetingText.map((char, index) => (
            <span
              key={index}
              className="wave-char"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
          {texts[language].rest}
        </h1>
<<<<<<< Updated upstream
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {texts[language].description} {/* Use dynamic text based on language */}
=======
        <p
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
          data-aos="fade-in"
          data-aos-delay="400"
        >
          {texts[language].description}
>>>>>>> Stashed changes
        </p>
        <div
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <a
<<<<<<< Updated upstream
            href="#"
=======
            href="https://drive.google.com/file/d/1aY_c7vNP4woDXv12DXNN4HI1a7ikvPcl/view?usp=sharing"
>>>>>>> Stashed changes
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            {texts[language].downloadCv} {/* Use dynamic text based on language */}
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
