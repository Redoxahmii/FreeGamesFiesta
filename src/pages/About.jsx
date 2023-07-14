/* eslint-disable react-refresh/only-export-components */
import { AnimatedTextCharacter } from "../components/AnimatedTextCharacter";
import Game from "../assets/game.jpg";
const About = () => {
  return (
    <section className="py-10 lg:py-0 lg:pt-20 bg-base-100 animate-fade duration-500">
      <div className="max-w-full py-4 mx-10 lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-primary">
                <span className="text-sm uppercase">
                  Does anyone even read this?
                </span>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  <AnimatedTextCharacter
                    text="About"
                    delayChildren="0.5"
                    staggerChildren="0.1"
                  ></AnimatedTextCharacter>
                </h1>
              </div>
              <p className="px-4 mb-10 text-sm leading-7 text-gray-400">
                I am a solo developer based in Pakistan and I love to make
                websites which are fast, responsive and beautiful. I have
                experience in making websites using React, Nextjs, Tailwind CSS,
                and Firebase.This website is a token of my love to the gaming
                community and I hope you enjoy it.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div
                    className="tooltip text-left"
                    data-tip="Yeah your eyes are seeing correctly."
                  >
                    <div className="p-6 bg-white dark:bg-gray-900 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-500">
                      <span className=" text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        2097
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Projects unfinished
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div
                    className="tooltip text-left"
                    data-tip="CS is better anyways"
                  >
                    <div className="p-6 bg-white dark:bg-gray-900 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-500">
                      <span className=" text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fillRule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        3,590
                      </p>
                      <h2 className=" text-[13px] text-gray-700 dark:text-gray-400">
                        Valorant irons helped
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-500">
                    <div
                      className="tooltip tooltip-left text-left"
                      data-tip="Joji all the way"
                    >
                      <span className="text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        74%
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Sadness
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div
                    className="tooltip tooltip-right text-left"
                    data-tip="Yes you dirty minded person."
                  >
                    <div className="p-6 bg-white dark:bg-gray-900 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-500">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        0.001.ms
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Timing
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 max-h-[40rem] lg:mb-0">
            <img
              src={Game}
              alt=""
              className="shadow-2xl shadow-secondary/50 z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
