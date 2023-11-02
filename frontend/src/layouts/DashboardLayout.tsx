import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@store/features/userSlice";
import { RootState } from "@store/store";
import { useEffect } from "react";
import logo from "@assets/logo.png";
import NotificationBellIcon from "@components/icons/notification-bell";
import HomeIcon from "@components/icons/home";
import UserIcon from "@components/icons/user";
import SunIcon from "@components/icons/sun";
import LogoutIcon from "@components/icons/logout";
import MoonIcon from "@components/icons/moon";
import useTheme from "hooks/useTheme";
import CampIcon from "@components/icons/camp";

function DashboardLayout() {
  const user = useSelector((state: RootState) => state.authenticate.token);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    if (user === "")
      return navigate("/sign-in", {
        state: { status: "Unauthorized", callbackURL: location.pathname },
      });
  }, [user, navigate, location]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="py-1 px-4 flex justify-between border-b-[1px] border-solid shadow-md ">
        <section className="flex content-center">
          <img src={logo} alt="YelpCamp PH" width={50} height={50} />
          <span className="my-auto font-semibold">YelpCamp PH</span>
        </section>

        <section className="flex my-auto justify-center content-center ">
          <div className="mx-2 my-auto tooltip tooltip-primary tooltip-bottom" data-tip="Home">
            <Link to="/dashboard" className="hover:text-primary ">
              <HomeIcon width="22" height="22" />{" "}
            </Link>
          </div>

          <div className="mx-2 my-auto tooltip tooltip-primary tooltip-bottom" data-tip="My Camp">
            <Link to="my-campgrounds" className="hover:text-primary ">
              <CampIcon width="20" height="20" className="hover:fill-primary" />
            </Link>
          </div>
          <div
            className="mx-2 my-auto tooltip tooltip-primary tooltip-bottom"
            data-tip="Notifications"
          >
            <Link to="notification" className="hover:text-primary ">
              <NotificationBellIcon width="22" height="22" className="hover:fill-primary" />
            </Link>
          </div>

          <div className="mx-2 my-auto tooltip tooltip-primary tooltip-bottom" data-tip="Theme">
            <label className="mx-2 swap swap-rotate hover:text-primary">
              <input type="checkbox" onClick={theme} />
              <SunIcon width="20" height="20" className="swap-on " />
              <MoonIcon width="20" height="20" className="swap-off " />
            </label>
          </div>

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
                <button className="hover:text-primary hover:stroke-primary" onClick={handleLogout}>
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
