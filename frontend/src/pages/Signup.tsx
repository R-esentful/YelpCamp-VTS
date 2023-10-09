import sign from "assets/sign.jpg";
import logo from "@assets/logo.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import ThemeButton from "@components/theme";

function Signup() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <section className="p-4 h-screen flex flex-col">
        <section className="flex content-center justify-between">
          <div className="flex content-center">
            <img src={logo} alt="YelpCamp PH" width={60} height={60} />
            <span className="my-auto  text-xl font-semibold ">YelpCamp PH</span>
          </div>
          <ThemeButton />
        </section>

        <section className="flex-grow px-8 py-4 w-full ">
          <div className="h-full xl:px-10 flex flex-col justify-evenly">
            <div>
              <div>
                <h1 className="text-lg font-bold sm:text-2xl md:text-center lg:text-left">
                  Get Started with YelpCamp PH
                </h1>
                <p className="text-xs sm:text-sm md:text-center lg:text-left">
                  Discover the Great Outdoors with YelpCamp!
                </p>
              </div>
              <form action="" className="mt-4 w-full ">
                {/* Email Address */}
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input bg-slate-200 " />
                </div>
                {/* Password */}

                <div className="form-control w-full   mt-3">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input bg-slate-200 " />
                </div>

                {/* Confirm Password */}
                <div className="form-control w-full   mt-3">
                  <label className="label">
                    <span className="label-text">Confirm password</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input bg-slate-200 " />
                </div>

                <button type="submit" className="btn btn-primary w-full  mt-8 ">
                  CREATE AN ACCOUNT
                </button>
              </form>
            </div>

            <div>
              <div className="divider my-8 w-full  text-sm">OR</div>
              <div className="w-full  grid grid-cols-1 gap-4 ">
                <button className="btn btn-ghost">
                  <BiLogoFacebookCircle
                    color="blue"
                    className="align-middle my-auto  w-[24px] h-[24px]"
                  />{" "}
                  <span>Facebook</span>
                </button>
                <button className="btn btn-ghost">
                  <FcGoogle className="align-middle my-auto  w-[23px] h-[23px]" />{" "}
                  <span>google</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="hidden md:block">
        <img src={sign} alt="" className="h-full object-cover" />
      </section>
    </div>
  );
}
export default Signup;
