import test from "@assets/community03.jpg";
import BookMarkIcon from "@components/icons/bookmark";
function CardListing() {
  return (
    <div className="p-4 flex  rounded-xl hover:bg-neutral-content hover:cursor-pointer">
      <img src={test} alt="" className="w-[120px] h-full object-cover rounded-xl" />
      <div className="ml-4 relative w-full">
        <div
          className="tooltip tooltip-bottom absolute right-0 top-0 tooltip-primary m-auto"
          data-tip="Save"
        >
          <button className=" p-0 hover:text-primary my-auto ">
            <BookMarkIcon width="18" height="18" className="m-auto" />
          </button>
        </div>
        <h1 className="text-lg flex text-current font-bold">Camp sawi</h1>
        <p className="text-xs">Mignlanilla,Cebu City</p>

        <p className="text-sm mt-1 absolute bottom-3">₱ 1000</p>
      </div>
    </div>
  );
}
export default CardListing;
