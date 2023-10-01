import logo from "@assets/logo.png";
import landing from "@assets/landing.png";
function Landing() {
  return (
    <>
      <div className="flex flex-col flex-grow z-10 mx-8 my-4">
        <nav className="flex justify-between ">
          <section className="flex content-center">
            <img src={logo} alt="YelpCamp PH" width={60} height={60} />
            <span className="my-auto  text-xl font-bold">YelpCamp PH</span>
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
            <h1 className="text-5xl text-primary">
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

          <div>
            <img src={landing} alt="Camping" className="w-full h-full" />
          </div>
        </section>

        <div>QQQ</div>
      </div>
    </>
  );
}
export default Landing;
