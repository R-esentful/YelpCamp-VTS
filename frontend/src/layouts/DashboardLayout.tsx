import { Outlet } from "react-router-dom";
import logo from "@assets/logo.png";
import NotificationBellIcon from "@components/icons/notification-bell";
import user from "@assets/review01.jpg";
import HomeIcon from "@components/icons/home";
import UserIcon from "@components/icons/user";
import SunIcon from "@components/icons/sun";
import LogoutIcon from "@components/icons/logout";
import MoonIcon from "@components/icons/moon";
import useTheme from "hooks/useTheme";
import CampIcon from "@components/icons/camp";

function DashboardLayout() {
  const theme = useTheme();

  return (
    <div className="flex flex-col h-screen">
      <nav className="py-1 px-4 flex justify-between border-b-[1px] border-solid shadow-md ">
        <section className="flex content-center">
          <img src={logo} alt="YelpCamp PH" width={50} height={50} />
          <span className="my-auto font-semibold">YelpCamp PH</span>
        </section>

        <section className="flex my-auto justify-center content-center ">
          <button className="mx-2 flex my-auto">
            <HomeIcon stroke="black" width="22" height="22" className="hover:fill-primary" />{" "}
          </button>

          <button className="mx-2">
            <CampIcon width="20" height="20" className="hover:fill-primary" />
          </button>

          <button className="mx-2 ">
            <NotificationBellIcon
              stroke="black"
              width="22"
              height="22"
              className="hover:fill-primary"
            />
          </button>

          <label className="mx-2 swap swap-rotate">
            <input type="checkbox" onClick={theme} />
            <SunIcon width="20" height="20" className="swap-on hover:fill-primary" />
            <MoonIcon width="20" height="20" className="swap-off hover:fill-primary" />
          </label>

          <div className="w-[42px] h-[42px] p-1 my-auto mx-2 dropdown dropdown-end dropdown-hover">
            <img
              tabIndex={0}
              src={user}
              alt=""
              className="w-full h-full object-cover rounded-full hover:cursor-pointer"
            />
            <ul
              tabIndex={0}
              className="dropdown-content bg-white z-[1] menu p-2 shadow rounded-box w-52"
            >
              <li>
                <a href="" className="hover:text-primary hover:stroke-primary">
                  <UserIcon width="20" height="20" /> Profile
                </a>
              </li>
              <li>
                <button className="hover:text-primary hover:stroke-primary">
                  <LogoutIcon width="20" height="20" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </nav>

      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
export default DashboardLayout;
