import test from "@assets/community03.jpg";
import CampIcon from "@components/icons/camp";
import LocationIcon from "@components/icons/location";
function CardListing() {
  return (
    <div className="p-4 flex border border-neutral rounded-xl glass hover:bg-primary-content hover:cursor-pointer">
      <img src={test} alt="" className="w-[120px] h-[120px] object-cover rounded-xl" />
      <div className="ml-4">
        <h1 className="text-lg flex">
          <CampIcon width="18" height="18" className="my-auto mr-2" />
          TEST!
        </h1>
        <p className="text-sm flex mt-1">
          <LocationIcon width="18" height="18" className="my-auto" />
          <span className="ml-1">Loc</span>{" "}
        </p>
        <p className="text-sm mt-1">ASDASDA</p>
        <p className="text-sm mt-1">PRICE</p>
      </div>
    </div>
  );
}
export default CardListing;
