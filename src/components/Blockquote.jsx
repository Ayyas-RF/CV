import React, { useState, useEffect } from "react";
import { Blockquote as FlowbiteBlockquote } from "flowbite-react";
import { useLanguage } from "../context/LanguageContext";

const Blockquote = () => {
  const { language } = useLanguage();

  const texts = {
    en: [
      "”Without training, they lacked knowledge. Without knowledge, they lacked confidence. Without confidence, they lacked victory.”",
      "”Always be tactful and well-mannered and teach your subordinates to do the same.”",
      "”Learn as much as you can from those who know more than you, who do better than you, who see more clearly than you.”"
    ],
    id: [
      "”Tanpa pelatihan, mereka tidak memiliki pengetahuan. Tanpa pengetahuan, mereka kurang percaya diri. Tanpa kepercayaan diri, mereka tidak memiliki kemenangan.”",
      "”Selalu bersikap bijaksana dan santun dan ajarkan bawahan Anda untuk melakukan hal yang sama.”",
      "”Belajarlah sebanyak mungkin dari mereka yang tahu lebih banyak daripada Kamu, yang melakukan lebih baik daripada Kamu, yang melihat lebih jelas daripada Kamu.”"
    ]
  };

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const totalQuotes = texts[language].length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % totalQuotes);
    }, 6000); // Change quote every 6 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [language, totalQuotes]);

  return (
    <FlowbiteBlockquote className="p-4 md:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md mt-5 overflow-hidden">
      <svg
        className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600 mx-auto md:mx-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentQuoteIndex * 100}%)`
          }}
        >
          {texts[language].map((quote, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <p className="text-lg text-gray-800 dark:text-gray-200 text-center sm:text-left">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FlowbiteBlockquote>
  );
};

export default Blockquote;
