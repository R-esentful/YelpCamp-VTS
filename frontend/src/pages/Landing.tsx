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

function Landing() {
  return (
    <>
      <div className="h-screen flex flex-col flex-grow z-10 mx-8 my-4">
        <nav className="flex justify-between ">
          <section className="flex content-center">
            <img src={logo} alt="YelpCamp PH" width={60} height={60} />
            <span className="my-auto  text-xl font-semibold">YelpCamp PH</span>
          </section>

          <section className="my-auto">
            <a href="" className="hover:text-primary hover:underline hover:underline-offset-4 mr-4">
              Home
            </a>
            <a href="" className="hover:text-primary hover:underline hover:underline-offset-4 mr-4">
              Guide
            </a>
            <a href="" className="hover:text-primary hover:underline hover:underline-offset-4 mr-4">
              About
            </a>
            <button className="btn btn-primary outline-none mr-2  rounded-full font-normal">
              Sign Up
            </button>
            <button className="btn btn-primary outline-none rounded-full font-normal">Login</button>
          </section>
        </nav>

        <section className="flex-grow grid grid-cols-2 gap-4 m-auto">
          <div className="my-auto">
            <h1 className="text-5xl text-primary font-semibold">
              Discover the natural wonders of the Philippines with YelpCamp
            </h1>
            <p className="my-4 text-xl text-neutral-800">
              Your ultimate guide to camping, hiking, and outdoor fun.
            </p>
            <div>
              <button className="btn btn-primary mr-4">VIEW CAMPGROUNDS</button>
              <a
                href=""
                className="btn btn-ghost outline-none text-primary underline underline-offset-4"
              >
                MORE ABOUT THIS
              </a>
            </div>
          </div>

          <div className="w-full h-full flex">
            <img src={landing} alt="" className="max-w-[85%] max-h-[85%] m-auto block" />
          </div>
        </section>
      </div>

      <section className="mx-8 my-32 h-[400px] p-5 flex flex-col">
        <h1 className="text-center text-7xl mb-4">Discover & Explore</h1>
        <p className="text-center m-auto w-1/2">
          Each campsite in YelpCamp PH offers unique features, inviting you to embark on
          unforgettable adventures and create lasting memories.
        </p>
        <div className="flex-grow mx-auto my-4 grid grid-cols-4 gap-4 p-2">
          <div className="m-auto">
            <Mountain width="100" height="100" className="m-auto" />
            <p className="mt-2 text-xl text-center">Camp amidst breathtaking peaks.</p>
          </div>
          <div className="m-auto">
            <Forest width="100" height="100" className="m-auto" />
            <p className="mt-2 text-xl text-center">Relax on untouched shores.</p>
          </div>
          <div className="m-auto">
            <Beach width="100" height="100" className="m-auto" />
            <p className="mt-2 text-xl text-center">Explore nature's wonders.</p>
          </div>
          <div className="m-auto">
            <River width="100" height="100" className="m-auto" />
            <p className="mt-2 text-xl text-center">Enjoy refreshing waters.</p>
          </div>
        </div>
      </section>

      <section className="mx-8 mb-48 grid grid-cols-2 gap-6 py-10 px-4">
        <section className=" px-14">
          <h1 className="text-6xl font-semibold">Our Places with The Best Nature</h1>
          <p className="mt-4 text-lg">
            We have many places that become the base for our camping activities with beautiful and
            unique natural scenery and various types of activites carried out.
          </p>

          <div className="mt-14 m-auto flex">
            <span className="text-6xl mr-4">01</span>
            <button className="p-4 bg-primary rounded-full mr-2 my-auto">
              <ArrowLeftIcon width="24" height="24" />
            </button>
            <button className="p-4 bg-primary rounded-full my-auto">
              <ArrowRightIcon width="24" height="24" />
            </button>
          </div>
        </section>

        <section className="flex overflow-hidden">
          <img src={community01} alt="" className="w-[450px] h-[500px] object-cover rounded-xl" />
          <img
            src={community02}
            alt=""
            className="w-[450px] h-[500px] object-cover rounded-xl ml-[5%]"
          />
        </section>
      </section>

      <section className="mx-8 mb-72 grid grid-cols-2 gap-6 p-4">
        <section className="flex relative px-14">
          <img src={community01} alt="" className="w-[350px] h-[300px] object-cover rounded-xl" />
          <img
            src={community02}
            alt=""
            className="absolute top-1/4 left-1/4 w-[350px] h-[300px] object-cover rounded-xl "
          />
          <img
            src={community03}
            alt=""
            className="absolute top-2/4 left-2/4 w-[350px] h-[300px] object-cover rounded-xl"
          />
        </section>

        <section className="px-14">
          <h1 className="text-5xl font-semibold">
            Discover, connect, and thrive with YelpCamp PH Community!
          </h1>
          <p className="mt-4 text-lg">
            YelpCamp connects passionate Filipino campers to unforgettable outdoor adventures across
            the Philippines.
          </p>
        </section>
      </section>

      <section className="mx-8 p-4">
        <h1 className="text-center text-6xl font-semibold">How was Their Experience</h1>
        <p className="text-center mt-4 text-lg">
          How do they feel after doing camping activities to fill their time from life and problems
          in the city
        </p>
        <div className="grid grid-cols-3 gap-12 m-auto mt-10 p-10">
          <CardLandingPage />
          <CardLandingPage />
          <CardLandingPage />
        </div>
      </section>

      <footer className="mx-8 mt-44 grid grid-cols-4 p-8 m-auto  border-t-[1px] border-gray-300">
        <section>
          <section className="flex content-center">
            <img src={logo} alt="YelpCamp PH" width={60} height={60} />
            <span className="my-auto  text-xl font-semibold">YelpCamp PH</span>
          </section>
          <p className="">Discover the Great Outdoors with YelpCamp!</p>
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
    </>
  );
}
export default Landing;
