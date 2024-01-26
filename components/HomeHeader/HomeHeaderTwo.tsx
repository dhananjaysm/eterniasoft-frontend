import React from "react";

const HomeHeaderTwo = () => {
  return (
    <header className="dark:bg-gray-800 z-50 flex w-full flex-wrap bg-white py-3 text-sm md:flex-nowrap md:justify-start md:py-0">
      <nav
        className="mx-auto w-full max-w-[85rem] px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <a
              className="dark:focus:ring-gray-600 flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle border-gray-200 text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600 flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:focus:outline-none dark:focus:ring-1"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
          >
            <div className="[&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2">
              <div className="divide-gray-200 dark:divide-gray-700 mt-5 flex flex-col gap-x-0 divide-y divide-dashed md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:divide-y-0 md:divide-solid md:ps-7">
                <a
                  className="dark:focus:ring-gray-600 py-3 font-medium text-blue-600 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 md:py-6"
                  href="#"
                  aria-current="page"
                >
                  Landing
                </a>

                <div className="hs-dropdown py-3 [--adaptive:none] [--strategy:static] md:py-6 md:[--strategy:absolute] md:[--trigger:hover]">
                  <button
                    type="button"
                    className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:ring-gray-600 flex w-full items-center font-medium dark:focus:outline-none dark:focus:ring-1"
                  >
                    Company
                    <svg
                      className="ms-2 h-2.5 w-2.5 flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 dark:bg-gray-800 dark:divide-gray-700 top-full z-10 hidden rounded-lg bg-white py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full md:w-80 md:p-2 md:shadow-2xl md:duration-[150ms]">
                    <a
                      className="text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600 inline-flex w-full gap-x-5 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1"
                      href="#"
                    >
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="22" x2="2" y1="12" y2="12" />
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                        <line x1="6" x2="6.01" y1="16" y2="16" />
                        <line x1="10" x2="10.01" y1="16" y2="16" />
                      </svg>
                      <div className="grow">
                        <span className="text-gray-800 dark:text-gray-200 mb-1 block font-semibold">
                          Data
                        </span>
                        How you get the most accurate and up-to-date data
                      </div>
                    </a>

                    <div className="border-gray-100 dark:border-gray-800 my-2 border-t"></div>

                    <a
                      className="text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600 inline-flex w-full gap-x-5 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1"
                      href="#"
                    >
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <div className="grow">
                        <span className="text-gray-800 dark:text-gray-200 mb-1 block font-semibold">
                          Team{" "}
                          <span className="ms-1 inline rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
                            We're hiring
                          </span>
                        </span>
                        Meet the people building products to help your business
                        grow
                      </div>
                    </a>

                    <div className="border-gray-100 dark:border-gray-800 my-2 border-t"></div>

                    <a
                      className="text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600 inline-flex w-full gap-x-5 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1"
                      href="#"
                    >
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                        <path d="M18 14h-8" />
                        <path d="M15 18h-5" />
                        <path d="M10 6h8v4h-8V6Z" />
                      </svg>
                      <div className="grow">
                        <span className="text-gray-800 dark:text-gray-200 mb-1 block font-semibold">
                          Blog
                        </span>
                        The latest news, feature releases, and how to grow with
                        data
                      </div>
                    </a>
                  </div>
                </div>

                <a
                  className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:ring-gray-600 py-3 font-medium dark:focus:outline-none dark:focus:ring-1 md:py-6"
                  href="#"
                >
                  Resources
                </a>

                <a
                  className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:ring-gray-600 py-3 font-medium dark:focus:outline-none dark:focus:ring-1 md:py-6"
                  href="#"
                >
                  Join us{" "}
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-600">
                    4
                  </span>
                </a>

                <div className="pt-3 md:pt-0">
                  <a
                    className="dark:focus:ring-gray-600 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1"
                    href="#"
                  >
                    Request demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeHeaderTwo;
