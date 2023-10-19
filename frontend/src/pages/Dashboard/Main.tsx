import FilterIcon from "@components/icons/filter";
import SmileIcon from "@components/icons/smile";
import TentIcon from "@components/icons/tent";
import CardListing from "@components/main/card-listing";

function Main() {
  return (
    <div className="py-4 px-4 h-full grid grid-cols-3 gap-4">
      <div className="col-span-2 flex flex-col relative">
        <div className="flex justify-end">
          <div className="flex">
            <div className="tooltip tooltip-primary tooltip-bottom" data-tip="New camp">
              <button className="btn btn-ghost btn-sm h-[40px] hover:text-primary">
                <TentIcon width="18" height="18" />
              </button>
            </div>
            <input
              type="text"
              className="input input-secondary bg-inherit h-[40px] mx-2 outline-0 focus:outline-none"
              placeholder="Search"
            />
            <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Filter">
              <button className="btn btn-ghost btn-sm h-[40px] hover:text-primary">
                <FilterIcon width="18" height="18" className="" />
              </button>
            </div>
          </div>
        </div>

        <div className="  border-b-[1px] border-neutral flex ">
          <button className="btn btn-ghost mx-1 font-semibold">
            <SmileIcon width="18" height="18" /> <span className="ml-1">Best Matches</span>
          </button>
          <button className="btn btn-ghost mx-1 font-semibold">Near Me</button>
          <button className="btn btn-ghost mx-1 font-semibold">Visited</button>
          <button className="btn btn-ghost mx-1 font-semibold">Bookmark</button>
        </div>

        <div className=" mt-4 grid grid-cols-3 gap-4">
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
          <CardListing />
        </div>

        <div className="join absolute bottom-4 left-1/2">
          <button className="join-item btn ">1</button>
          <button className="join-item btn  btn-active">2</button>
          <button className="join-item btn ">3</button>
          <button className="join-item btn ">4</button>
        </div>
      </div>
      <div>map</div>
    </div>
  );
}
export default Main;
