import MenuIcon from "@components/icons/menu";
import logo from "@assets/logo.png";
import ThemeButton from "./theme";

function Nav() {
  return (
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
          <button className="btn btn-primary outline-none rounded-full font-normal mr-2 my-auto">
            Login
          </button>
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
