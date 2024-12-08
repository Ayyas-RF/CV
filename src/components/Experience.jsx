import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Button, Tooltip } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("project1");
  const { language } = useLanguage();

  const content = {
    en: {
      project1: {
        title: "Translating Browser Extension",
        description:
          "This is my first contribution to open-source project that led by XengShi and his team. My contribution is very simple, that is translating the language to Indonesian language. Even though it's simple, that contribution make me learn how to forked a repo, make a pull request, and more.",
        stack: "HTML, CSS, JavaScript",
        projectSite: "Visit the project ->",
        projectLink: "https://github.com/XengShi/materialYouNewTab"
      },
      project2: {
        title: "Marketplace",
        description:
          "This project is about making a functional marketplace website like for example, realistic logic about product stock, total calculation for price, deleting product from the shopping cart, updating the cart, and so on.",
        stack: "HTML, CSS, JavaScript",
        projectSite: "Visit the project ->",
        projectLink: "https://github.com/Ayyas-RF/Vintyls"
      },
      project3: {
        title: "Curriculum Vitae",
        description:
          "Yes this also included in my list as it is make me learn how to make an appealing design, how important the animation for good User Experience, what perfect combination for each element, as well as the need to make responsive page, toggling dark mode and language.",
        stack: "React, Tailwind, HTML, CSS, JavaScript",
        projectSite: "Visit the project ->",
        projectLink: "https://github.com/Ayyas-RF/CV"
      },
      tooltip: {
        phone: "Phone",
        address: "Address"
      }
    },
    id: {
      project1: {
        title: "Penerjemahan Ekstensi Browser",
        description:
          "Ini adalah kontribusi pertama saya dalam proyek open-source yang dipimpin oleh XengShi dan timnya. Kontribusi saya sangat sederhana, yaitu menerjemahkan bahasa ke dalam bahasa Indonesia. Meskipun sederhana, kontribusi tersebut membuat saya belajar bagaimana cara melakukan fork repo, membuat pull request, dan banyak lagi.",
        stack: "HTML, CSS, JavaScript",
        projectSite: "Kunjungi proyeknya ->",
        projectLink: "https://github.com/XengShi/materialYouNewTab"
      },
      project2: {
        title: "Marketplace",
        description:
          "Proyek ini adalah tentang membuat situs web marketplace yang fungsional seperti misalnya, logika realistis tentang stok produk, perhitungan total harga, menghapus produk dari keranjang belanja, memperbarui keranjang, dan sebagainya.",
        stack: "HTML, CSS, JavaScript",
        projectSite: "Kunjungi proyeknya ->",
        projectLink: "https://example.com/marketplace"
      },
      project3: {
        title: "Curriculum Vitae",
        description:
          "Ya, ini juga termasuk dalam daftar saya karena proyek ini membuat saya belajar bagaimana membuat desain yang menarik, betapa pentingnya animasi untuk User Experience yang baik, kombinasi yang tepat untuk setiap elemen, serta perlunya membuat halaman yang responsif, mengganti mode gelap dan juga bahasa.",
        stack: "React, Tailwind, HTML, CSS, JavaScript",
        projectSite: "Kunjungi proyeknya ->",
        projectLink: "https://example.com/curriculum-vitae"
      },
      tooltip: {
        phone: "Telepon",
        address: "Alamat"
      }
    }
  };

  const text = content[language];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  return (
    <div className="mt-5 flex flex-col sm:flex-col-reverse md:flex-row md:items-center md:gap-6">
      <div className="w-full md:w-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul
          className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          role="tablist"
        >
          {["project1", "project2", "project3"].map((project, index) => (
            <li key={index} className="me-2">
              <button
                onClick={() => setActiveTab(project)}
                className={`inline-block p-4 ${
                  activeTab === project
                    ? "text-blue-600 dark:text-blue-500"
                    : ""
                } hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {language === "en"
                  ? `Project ${index + 1}`
                  : `Proyek ${index + 1}`}
              </button>
            </li>
          ))}
        </ul>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <h2
            className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white"
            data-aos="fade-right"
          >
            {text[activeTab].title}
          </h2>
          <p
            className="mb-3 text-gray-500 dark:text-gray-400"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {text[activeTab].description}
          </p>
          <p
            className="mb-3 text-black dark:text-gray-400"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {text[activeTab].stack}
          </p>
          <a
            href={text[activeTab].projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            data-aos="fade-right"
          >
            {text[activeTab].projectSite}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-row items-center justify-center md:items-end md:w-1/3 gap-6 sm:gap-x-4 mt-10">
        <Tooltip content="berrzert9@gmail.com" placement="top" style="light">
          <Button data-aos="fade-down-right">Email</Button>
        </Tooltip>
        <Tooltip content="+62 813 2184 4284" placement="top" style="light">
          <Button data-aos="fade-down">{text.tooltip.phone}</Button>
        </Tooltip>
        <Tooltip content="github.com/Ayyas-RF" placement="top" style="light">
          <Button data-aos="fade-down-left">GitHub</Button>
        </Tooltip>
        <Tooltip content="Jl. Leuwipanjang 199B" placement="top" style="light">
          <Button data-aos="fade-up">{text.tooltip.address}</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Experience;
