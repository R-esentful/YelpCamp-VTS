import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import ThemeButton from "@components/theme";
import sign from "assets/sign.jpg";
import logo from "@assets/logo.png";

function Signin() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <section className=" hidden lg:block">
        <img src={sign} alt="" className="h-full object-cover" />
      </section>

      <section className="p-4 h-screen flex flex-col">
        <section className="flex content-center justify-between">
          <Link to="/" className="flex content-center">
            <img src={logo} alt="YelpCamp PH" width={60} height={60} />
            <span className="my-auto  text-xl font-semibold ">YelpCamp PH</span>
          </Link>
          <ThemeButton />
        </section>

        <section className="flex-grow px-20 py-4 w-full ">
          <div className="h-full xl:px-10 flex flex-col justify-evenly">
            <div>
              <div>
                <h1 className="text-lg text-center font-bold sm:text-2xl ">Login YelpCamp PH</h1>
                <p className="text-xs text-center sm:text-sm ">
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

                <button type="submit" className="btn btn-primary w-full  mt-8 ">
                  LOGIN
                </button>
              </form>
            </div>

            <div>
              <div className="divider my-8 w-full  text-sm">OR</div>
              <div className="w-full  grid grid-cols-1 gap-4  lg:grid-cols-2">
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
              <p className="text-sm text-center mt-4">
                Don't have an account?{" "}
                <Link className="text-primary" to="/sign-up">
                  Sign up!
                </Link>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Signin;
