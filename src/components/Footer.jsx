import React from "react";
import { styles } from "../styles";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center mt-10 mb-6">
        <ul className="flex justify-center gap-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
          <li>
            <a
              href="https://github.com/swapnilwalhekar"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current text-white-400 group-hover:text-yellow-300 transition-transform duration-200 group-hover:scale-110"
              >
                <title>Github</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/swapnil_w_0805/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current text-white-400 group-hover:text-yellow-300 transition-transform duration-200 group-hover:scale-110"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/swapnil-walhekar-a1617a209/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current text-white-400 group-hover:text-yellow-300 transition-transform duration-200 group-hover:scale-110"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:walhekar.swapnil2018@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-7 h-7 stroke-current text-white-300 group-hover:text-yellow-300 transition-transform duration-200 group-hover:scale-110"
              >
                <title>Email</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center text-center my-10 mx-auto gap-2 max-w-3xl">
        <p className={`${styles.sectionSubText} blue-text-gradient`}>
          Inspirations from Andrain
        </p>
        <p className={`${styles.sectionSubText} blue-text-gradient`}>
          Developed by Swapnil Walhekar
        </p>
      </div>
    </>
  );
};

export default Footer;
