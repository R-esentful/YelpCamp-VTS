import MenuIcon from "@components/icons/menu";
import logo from "@assets/logo.png";
import ThemeButton from "./ui/theme";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between ">
      <section className="flex content-center">
        <img src={logo} alt="YelpCamp PH" width={60} height={60} />
        <span className="my-auto  text-xl font-semibold">YelpCamp PH</span>
      </section>

      <section className="flex my-auto">
        <div className="hidden md:flex">
          <Link
            to="/"
            className="hover:text-primary hover:underline hover:underline-offset-4 mr-4 my-auto"
          >
            Home
          </Link>
          <Link
            to="/guide"
            className="hover:text-primary hover:underline hover:underline-offset-4 mr-4 my-auto"
          >
            Guide
          </Link>
          <Link
            to="/"
            className="hover:text-primary hover:underline hover:underline-offset-4 mr-4 my-auto"
          >
            About
          </Link>
          <Link
            to="/sign-up"
            className="btn btn-primary outline-none mr-2  rounded-full font-normal"
          >
            Sign Up
          </Link>
          <Link
            to="/sign-in"
            className="btn btn-primary outline-none rounded-full font-normal mr-2 my-auto"
          >
            Login
          </Link>
          <ThemeButton />
        </div>

        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost md:hidden ">
          <MenuIcon width="24" height="24" />
        </label>
      </section>
    </nav>
  );
}
export default Nav;
