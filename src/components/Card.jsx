import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Card = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { language } = useLanguage();

  // Define text content for each language
  const content = {
    en: {
      about: {
        title: "Let me introduce myself",
        description:
          "I am Ayyas Rasydan Fayadhi, a student of SMK Prakarya Internasional majoring in Software and Game Development. I have high enthusiasm and passion to learn more about software and also have a desire to contribute to open source projects.",
        learnMore: "Come on, visit my GitHub",
      },
      services: {
        title: "What are my interests and desires?",
        items: [
          "Contribute on open source projects",
          "Learn many things especially on Android",
          "Create an useful application for many people",
          "Guarantee the quality of user experience for ease activity on the apps",
          "Love to communicate in English language",
        ],
      },
      statistics: [
        { label: "Favorited Repositories", value: "2+" },
        { label: "Public Repositories", value: "6+" },
        { label: "Contributions", value: "3+" },
      ],
    },
    id: {
      about: {
        title: "Izinkan saya memperkenalkan diri",
        description:
          "Saya Ayyas Rasydan Fayadhi merupakan pelajar SMK Prakarya Internasional dalam jurusan Pengembangan Perangkat Lunak dan Gim. Saya memiliki antusias dan semangat yang tinggi untuk mempelajari lebih banyak hal mengenai perangkat lunak dan juga memiliki keinginan untuk berkontribusi dalam proyek open source.",
        learnMore: "Ayo, mampir ke akun GitHub ku",
      },
      services: {
        title: "Apa sih minat dan keinginan ku?",
        items: [
          "Berkontribusi dalam komunitas open source",
          "Belajar lebih banyak hal terutama dalam Android",
          "Membuat aplikasi yang berguna untuk banyak orang",
          "Menjamin kualitas pengalaman pengguna dalam beraktivitas dalam aplikasi",
          "Senang berkomunikasi dengan bahasa Inggris"
        ],
      },
      statistics: [
        { label: "Repositori Favorit", value: "2+" },
        { label: "Repositori", value: "6+" },
        { label: "Kontribusi", value: "3+" },
      ],
    },
  };

  const text = content[language];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 mr-96 ml-10">
      <ul
        className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
        role="tablist"
      >
        <li className="me-2">
          <button
            onClick={() => setActiveTab("about")}
            className={`inline-block p-4 ${
              activeTab === "about"
                ? "text-blue-600 dark:text-blue-500"
                : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            {language === "en" ? "About" : "Tentang"}
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setActiveTab("services")}
            className={`inline-block p-4 ${
              activeTab === "services"
                ? "text-blue-600 dark:text-blue-500"
                : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            {language === "en" ? "Dreams" : "Keinginan"}
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setActiveTab("statistics")}
            className={`inline-block p-4 ${
              activeTab === "statistics"
                ? "text-blue-600 dark:text-blue-500"
                : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            {language === "en" ? "Statistics" : "Statistik"}
          </button>
        </li>
      </ul>

      <div>
        {activeTab === "about" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {text.about.title}
            </h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              {text.about.description}
            </p>
            <a
              href="https://github.com/Ayyas-RF"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              {text.about.learnMore}
              <svg
                className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        )}

        {activeTab === "services" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {text.services.title}
            </h2>
            <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
              {text.services.items.map((item, index) => (
                <li
                  key={index}
                  className="flex space-x-2 rtl:space-x-reverse items-center"
                >
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "statistics" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              {text.statistics.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="mb-2 text-3xl font-extrabold">{stat.value}</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;