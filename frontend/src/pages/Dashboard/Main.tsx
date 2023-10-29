import Nav from "@components/main/nav-main";
import CardListing from "@components/main/card-listing";
import NewCampgroundDialog from "@components/main/new-campground-dialog";
import FilterDialog from "@components/main/filter-dialog";
import MapBox from "@components/mapbox";

function Main() {
  return (
    <>
      <div className="py-4 px-4 h-full grid grid-cols-3 gap-4">
        <div className="col-span-2 flex flex-col relative overflow">
          <Nav />
          <div className=" mt-4 grid grid-cols-2 p-2 gap-4 overflow-auto">
            <CardListing />
            <CardListing />
            <CardListing />
            <CardListing />
            <CardListing />
            <CardListing />
          </div>
          <NewCampgroundDialog />
          <FilterDialog />
        </div>
        <div>
          <MapBox />
        </div>
      </div>
    </>
  );
}
export default Main;
