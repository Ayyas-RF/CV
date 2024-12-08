import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { language } = useLanguage();

  const content = {
    en: {
      about: {
        title: "Let me introduce myself",
        description:
          "I am Ayyas Rasydan Fayadhi, a student of Vocational High School of Prakarya Internasional majoring in Software and Game Development. I have high enthusiasm and passion to learn more about software and also have a desire to contribute to open source projects.",
        learnMore: "Come on, visit my GitHub ->"
      },
      services: {
        title: "What are my interests and desires?",
        items: [
          "Contribute on open source projects",
          "Learn many things especially on Android",
          "Create a useful application for many people",
          "Guarantee the quality of user experience for ease of activity on the apps",
          "Love to communicate in English language"
        ]
      },
      statistics: [
        { label: "Favorited Repositories", value: "2+" },
        { label: "Public Repositories", value: "6+" },
        { label: "Contributions", value: "3+" }
      ],
      education: {
        title: "Here's my education so far",
        description:
          "Vocational High School of Prakarya Internasional is where i learn the most of my software development skill that trained with some practices guided by professional teacher that teaches you how to be discipline and have a strong dedication to learn and search some knowledge",
        schoolSite: "Visit my school website ->"
      }
    },
    id: {
      about: {
        title: "Izinkan saya memperkenalkan diri",
        description:
          "Saya Ayyas Rasydan Fayadhi merupakan pelajar SMK Prakarya Internasional dalam jurusan Pengembangan Perangkat Lunak dan Gim. Saya memiliki antusias dan semangat yang tinggi untuk mempelajari lebih banyak hal mengenai perangkat lunak dan juga memiliki keinginan untuk berkontribusi dalam proyek open source.",
        learnMore: "Ayo, mampir ke akun GitHub ku ->"
      },
      services: {
        title: "Apa sih minat dan keinginan ku?",
        items: [
          "Berkontribusi dalam komunitas open source",
          "Belajar lebih banyak hal terutama dalam Android",
          "Membuat aplikasi yang berguna untuk banyak orang",
          "Menjamin kualitas pengalaman pengguna dalam beraktivitas dalam aplikasi",
          "Senang berkomunikasi dengan bahasa Inggris"
        ]
      },
      statistics: [
        { label: "Repositori Favorit", value: "2+" },
        { label: "Repositori", value: "6+" },
        { label: "Kontribusi", value: "3+" }
      ],
      education: {
        title: "Ini pendidikan ku sejauh ini",
        description:
          "SMK Prakarya Internasional adalah sekolah dimana saya belajar banyak hal tentang keahlian-keahlian pengembangan perangkat lunak yang dilatih melalui beberapa praktek yang dipandu oleh guru professional yang mengajarkan kamu bagaimana cara menjadi disiplin dam memiliki tekad yang kuat untuk belajar dan mencari beberapa pengetahuan",
        schoolSite: "Kunjungi website sekolahku ->"
      }
    }
  };

  const text = content[language];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="mt-5 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
      <div className="card w-full md:w-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul
          className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          role="tablist"
        >
          <li className="me-2">
            <button
              onClick={() => setActiveTab("about")}
              className={`inline-block p-4 ${
                activeTab === "about" ? "text-blue-600 dark:text-blue-500" : ""
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
              data-aos="fade-in"
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
              data-aos="fade-in"
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
              da="fade-in"
            >
              {language === "en" ? "Statistics" : "Statistik"}
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab("education")}
              className={`inline-block p-4 ${
                activeTab === "education"
                  ? "text-blue-600 dark:text-blue-500"
                  : ""
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
              data-aos="fade-in"
            >
              {language === "en" ? "Education" : "Edukasi"}
            </button>
          </li>
        </ul>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          {activeTab === "about" && (
            <div data-aos="fade-right">
              <h2 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white">
                {text.about.title}
              </h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                {text.about.description}
              </p>
              <a
                href="https://github.com/Ayyas-RF"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              >
                {text.about.learnMore}
              </a>
            </div>
          )}
          {activeTab === "services" && (
            <div data-aos="fade-right">
              <h2 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">
                {text.services.title}
              </h2>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                {text.services.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500 mr-2">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "statistics" && (
            <dl className="grid grid-cols-2 gap-8 text-gray-900 dark:text-white">
              {text.statistics.map((stat, index) => (
                <div key={index} data-aos="fade-right">
                  <dt className="text-3xl font-extrabold">{stat.value}</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {activeTab === "education" && (
            <div data-aos="fade-right">
              <h2 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white">
                {text.education.title}
              </h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                {text.education.description}
              </p>
              <a
                href="http://www.smk-pi.sch.id/"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              >
                {text.education.schoolSite}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-start md:w-1/3 gap-4">
        <Button gradientDuoTone="purpleToBlue" data-aos="fade-down-right">
          Motivated
        </Button>
        <Button gradientDuoTone="cyanToBlue" data-aos="fade-down-left">
          Problem-Solving
        </Button>
        <Button gradientDuoTone="greenToBlue" data-aos="flip-right">
          Positive Attitude
        </Button>
        <Button gradientDuoTone="purpleToPink" data-aos="flip-left">
          Attention to Detail
        </Button>
        <Button gradientDuoTone="pinkToOrange" data-aos="fade-up-right">
          Teamwork
        </Button>
        <Button
          gradientDuoTone="tealToLime"
          className="from-teal-400 to-lime-600 text-white enabled:hover:text-white enabled:hover:from-teal-500 enabled:hover:to-lime-500"
          data-aos="fade-up-left"
        >
          Collaboration
        </Button>
        <Button
          gradientDuoTone="redToYellow"
          className="from-red-500 via-red-500 to-yellow-400 text-white"
          data-aos="zoom-in-up"
        >
          Adaptability
        </Button>
      </div>
    </div>
  );
};

export default Card;
