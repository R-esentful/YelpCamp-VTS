import BookMarkIcon from "@components/icons/bookmark";
import FilterIcon from "@components/icons/filter";
import HistoryIcon from "@components/icons/history";
import MapIcon from "@components/icons/map";
import SmileIcon from "@components/icons/smile";
import TentIcon from "@components/icons/tent";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const best = searchParam.get("tab") === "best matches";
  const near = searchParam.get("tab") === "near me";
  const visited = searchParam.get("tab") === "visited";
  const bookmark = searchParam.get("tab") === "bookmark";

  const handleDialog = (id: string) => {
    const modal = document!.getElementById(id) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  };

  return (
    <div className=" flex justify-between p-1">
      <div className="my-auto">
        <button
          className={`btn btn-ghost border-0 rounded-none ${
            best ? "border-b-2 border-b-primary" : ""
          }   mx-1 font-semibold hover:border-b-2 hover:border-primary `}
          onClick={() =>
            navigate({
              pathname: location.pathname,
              search: "?tab=best matches",
            })
          }
        >
          <SmileIcon width="18" height="18" /> <span className="ml-1">Best Matches</span>
        </button>
        <button
          className={`btn btn-ghost border-0 ${
            near ? "border-b-2 border-b-primary" : ""
          } rounded-none  mx-1 font-semibold hover:border-b-2 hover:border-primary`}
          onClick={() =>
            navigate({
              pathname: location.pathname,
              search: "?tab=near me",
            })
          }
        >
          <MapIcon width="18" height="18" /> Near Me
        </button>
        <button
          className={`btn btn-ghost border-0 ${
            visited ? "border-b-2 border-b-primary" : ""
          } rounded-none mx-1 font-semibold hover:border-b-2 hover:border-primary`}
          onClick={() =>
            navigate({
              pathname: location.pathname,
              search: "?tab=visited",
            })
          }
        >
          <HistoryIcon width="18" height="18" /> Visited
        </button>
        <button
          className={`btn btn-ghost border-0 ${
            bookmark ? "border-b-2 border-b-primary" : ""
          } rounded-none mx-1 font-semibold hover:border-b-2 hover:border-primary`}
          onClick={() =>
            navigate({
              pathname: location.pathname,
              search: "?tab=bookmark",
            })
          }
        >
          <BookMarkIcon width="18" height="18" /> Bookmark
        </button>
      </div>

      <div className="flex my-auto">
        <div className="tooltip tooltip-primary tooltip-bottom" data-tip="New camp">
          <button
            className="btn btn-ghost btn-sm h-[40px] hover:text-primary"
            onClick={() => handleDialog("new_camp")}
          >
            <TentIcon width="18" height="18" />
          </button>
        </div>
        <input
          type="text"
          className="input input-secondary bg-inherit h-[40px] mx-2 outline-0 focus:outline-none"
          placeholder="Search"
        />
        <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Filter">
          <button
            className="btn btn-ghost btn-sm h-[40px] hover:text-primary"
            onClick={() => handleDialog("filter")}
          >
            <FilterIcon width="18" height="18" className="" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Nav;
