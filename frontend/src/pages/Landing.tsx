import logo from "@assets/logo.png";
import landing from "@assets/landing.png";
import Mountain from "@components/icons/montain";
import Forest from "@components/icons/forest";
import River from "@components/icons/river";
import Beach from "@components/icons/beach";
import ArrowLeftIcon from "@components/icons/arrow-left";
import ArrowRightIcon from "@components/icons/arrow-right";
import community01 from "@assets/community01.jpg";
import community02 from "@assets/community02.jpg";
import community03 from "@assets/community03.jpg";
import CardLandingPage from "@components/card-landing";

import { useEffect, useState } from "react";
import MenuIcon from "@components/icons/menu";

function Landing() {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "yelplight");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme") || "yelplight";
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4 lg:flex lg:flex-col">
          {/* Page content here */}

          <nav className="flex justify-between ">
            <section className="flex content-center">
              <img src={logo} alt="YelpCamp PH" width={60} height={60} />
              <span className="my-auto  text-xl font-semibold">YelpCamp PH</span>
            </section>

            <section className="flex my-auto">
              <div className="hidden md:flex">
                <a
                  href=""
                  className="hover:text-primary hover:underline hover:underline-offset-4 mr-4 my-auto"
                >
                  Home
                </a>
                <a
                  href=""
                  className="hover:text-primary hover:underline hover:underline-offset-4 mr-4 my-auto"
                >
                  Guide
                </a>
                <a
                  href=""
                  className="hover:text-primary hover:underline hover:underline-offset-4 mr-4 my-auto"
                >
                  About
                </a>
                <button className="btn btn-primary outline-none mr-2  rounded-full font-normal">
                  Sign Up
                </button>
                <button className="btn btn-primary outline-none rounded-full font-normal mr-4 my-auto">
                  Login
                </button>
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    onClick={() =>
                      theme === "yelplight" ? setTheme("yelpdark") : setTheme("yelplight")
                    }
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-on fill-current w-[24px] h-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-[24px] h-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost md:hidden ">
                <MenuIcon width="24" height="24" />
              </label>
            </section>
          </nav>

          <section className="m-auto sm:grid md:grid-cols-2 md:h-screen md:gap-4">
            <div className="flex m-auto md:w-full md:h-full">
              <img src={landing} alt="" className="w-[85%] h-[85%] m-auto" />
            </div>

            <div className="my-auto p-4 md:row-start-1">
              <h1 className="text-xl text-primary text-center font-semibold sm:text-3xl md:text-4xl md:text-start">
                Discover the natural wonders of the Philippines with YelpCamp
              </h1>
              <p className="mt-4 mb-8 text-sm text-center sm:text-base md:text-lg md:text-left lg:mb-4">
                Your ultimate guide to camping, hiking, and outdoor fun.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="btn btn-primary mr-4">VIEW CAMPGROUNDS</button>
                <a
                  href=""
                  className="btn btn-ghost outline-none text-primary underline underline-offset-4"
                >
                  MORE ABOUT THIS
                </a>
              </div>
            </div>
          </section>

          <section className="mt-24 mb-32">
            <h1 className="text-center text-3xl mb-4 font-bold md:text-4xl">Discover & Explore</h1>
            <p className="text-center m-auto text-sm sm:text-base sm:w-[80%]">
              Each campsite in YelpCamp PH offers unique features, inviting you to embark on
              unforgettable adventures and create lasting memories.
            </p>
            <div className="flex-grow mx-auto my-8 p-2 sm:grid sm:grid-cols-4 sm:gap-2">
              <div className="m-auto">
                <Mountain className="m-auto w-[100px] h-[100px] sm:w-[90px]" />
                <p className="mt-2 text-base text-center sm:text-sm">
                  Camp amidst breathtaking peaks.
                </p>
              </div>
              <div className="m-auto">
                <Forest className="m-auto w-[100px] h-[100px] sm:w-[90px] lg:w-[180px]" />
                <p className="mt-2 text-base text-center sm:text-sm">Relax on untouched shores.</p>
              </div>
              <div className="m-auto">
                <Beach className="m-auto w-[100px] h-[100px] sm:w-[90px]" />
                <p className="mt-2 text-base text-center sm:text-sm">Explore nature's wonders.</p>
              </div>
              <div className="m-auto">
                <River className="m-auto w-[100px] h-[100px] sm:w-[90px]" />
                <p className="mt-2 text-base text-center sm:text-sm">Enjoy refreshing waters.</p>
              </div>
            </div>
          </section>

          <section className="p-4 mb-32 gap-6 mt-10 sm:grid sm:grid-cols-2">
            <section className="">
              <h1 className="text-3xl font-semibold text-center sm:text-left sm:text-4xl lg:text-5xl lg:text-left">
                Our Places with The Best Nature
              </h1>
              <p className="mt-4 text-sm text-center sm:text-left sm:text-base sm:w-[90%] lg:w-full lg:text-left">
                We have many places that become the base for our camping activities with beautiful
                and unique natural scenery and various types of activites carried out.
              </p>

              <div className="my-8 flex justify-center sm:justify-start">
                <span className="text-4xl mr-4 sm:text-5xl lg:text-6xl">01</span>
                <button className="p-2 bg-primary rounded-full mr-2 my-auto sm:p-3 lg:p-4">
                  <ArrowLeftIcon width="24" height="24" />
                </button>
                <button className="p-2 bg-primary rounded-full my-auto sm:p-3 lg:p-4">
                  <ArrowRightIcon width="24" height="24" />
                </button>
              </div>
            </section>

            <section className="flex xl:overflow-x-hidden">
              <img
                src={community01}
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-xl lg:w-[450px] lg:h-[500px] lg:m-auto"
              />
              <img
                src={community02}
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-xl ml-[5%] hidden xl:block"
              />
            </section>
          </section>

          <section className="mb-32 sm:grid sm:grid-cols-2">
            <section className="flex mx-8 relative mb-28 sm:mb-32">
              <img
                src={community01}
                alt=""
                className="w-[180px] h-[180px] object-cover rounded-xl sm:w-[160px] sm:h-[160px]  lg:w-[260px] lg:h-[260px] xl:w-[300px]"
              />
              <img
                src={community02}
                alt=""
                className="absolute top-1/4 left-1/4 w-[180px] h-[180px] object-cover rounded-xl sm:w-[160px] sm:h-[160px]  lg:w-[260px] lg:h-[260px] xl:w-[300px] "
              />
              <img
                src={community03}
                alt=""
                className="absolute top-2/4 left-2/4 w-[180px] h-[180px] object-cover rounded-xl sm:w-[160px] sm:h-[160px]  lg:w-[260px] lg:h-[260px] xl:w-[300px]"
              />
            </section>

            <section className="lg:my-auto">
              <h1 className="text-3xl font-semibold text-center sm:text-left sm:text-4xl lg:text-5xl ">
                Discover, connect, and thrive with YelpCamp PH Community!
              </h1>
              <p className="mt-4 text-sm text-center sm:text-left sm:text-base">
                YelpCamp connects passionate Filipino campers to unforgettable outdoor adventures
                across the Philippines.
              </p>
            </section>
          </section>

          <section className="">
            <h1 className="text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
              How was Their Experience
            </h1>
            <p className="text-center mt-4 text-sm sm:text-base">
              How do they feel after doing camping activities to fill their time from life and
              problems in the city
            </p>
            <div className="grid grid-cols-1 gap-8 m-auto mt-10 p-4 md:grid-cols-2 lg:grid-cols-3">
              <CardLandingPage />
              <CardLandingPage />
              <CardLandingPage className="md:col-span-2 lg:col-span-1" />
            </div>
          </section>

          <footer className=" mt-32 grid grid-cols-1 gap-4 p-8  border-t-[1px] border-gray-300 lg:grid-cols-4">
            <section>
              <section className="flex content-center">
                <img src={logo} alt="YelpCamp PH" width={60} height={60} />
                <span className="my-auto  text-xl font-semibold">YelpCamp PH</span>
              </section>
              <p className="text-xs">Discover the Great Outdoors with YelpCamp!</p>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Developer</h2>
              <ul>
                <li>Features</li>
                <li>FAQ</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Resources</h2>
              <ul>
                <li>UI Inspiration</li>
                <li>Demo</li>
                <li>Github</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold mb-2">Social Media</h2>
              <ul></ul>
            </section>
          </footer>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Landing;
