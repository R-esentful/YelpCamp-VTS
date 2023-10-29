import { Field, Formik, Form, FormikHelpers } from "formik";
import { useCallback, useState } from "react";
import { FilesInterface } from "@interfaces/Interface";
import Dialog from "@components/ui/dialog";
import CampIcon from "@components/icons/camp";
import DropZone from "@components/dropzone";
import WifiIcon from "@components/icons/wifi";
import ShowerIcon from "@components/icons/shower";
import TrailIcon from "@components/icons/trail";
import UtensilsIcon from "@components/icons/utensils";
import BoatIcon from "@components/icons/boat";
import FishIcon from "@components/icons/fish";
import HikeIcon from "@components/icons/hike";
import WaterIcon from "@components/icons/water";
import StarIcon from "@components/icons/star";
import { FormikNewCampground } from "@interfaces/FormikInterface";
import { newCampgroundSchema } from "@schema/schema";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import YelpCamp from "@actions/config";
import { useNavigate } from "react-router-dom";

function NewCampgroundDialog() {
  const user = useSelector((state: RootState) => state.authenticate.id);
  const [acceptedFiles, setAcceptedFiles] = useState<FilesInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [activites, setActivites] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        acceptedFiles.map((file: File, index) => {
          const fileURL = URL.createObjectURL(file);
          setAcceptedFiles((prev: any) => [...prev, { id: index, file: file, url: fileURL }]);
          setError(false);
        });
      } else {
        setError(true);
      }
    },
    [setAcceptedFiles]
  );

  const handleRemoveFile = useCallback(
    (id: string) => {
      const filtered = acceptedFiles.filter((file) => file.id !== id);
      setAcceptedFiles(filtered);
    },
    [acceptedFiles]
  );

  const handleCampFeature = useCallback(
    (type: string, feature: string) => {
      if (type === "amenities") {
        if (amenities.includes(feature)) {
          const filter = amenities.filter((feat) => feat !== feature);
          setAmenities(filter);
        } else {
          setAmenities((prev) => [...prev, feature]);
        }
      }

      if (type === "activities") {
        if (activites.includes(feature)) {
          const filter = amenities.filter((feat) => feat !== feature);
          setActivites(filter);
        } else {
          setActivites((prev) => [...prev, feature]);
        }
      }
    },
    [activites, amenities]
  );

  const initialNewCampgroundVal: FormikNewCampground = {
    campName: "",
    type: "",
    location: "",
    description: "",
    amenities: [],
    activities: [],
    images: [],
  };

  const handleNewCampground = async (
    state: FormikNewCampground,
    action: FormikHelpers<typeof initialNewCampgroundVal>
  ) => {
    state.amenities = amenities;
    state.activities = activites;
    // state.images = acceptedFiles.map((file: FilesInterface) => file.file);
    state.images = ["1", "2", "3"];
    if (state.amenities.length <= 0) {
      action.setFieldError("amenities", "Pick atleast 1 amenity");
    }

    if (state.activities.length <= 0) {
      action.setFieldError("activities", "Pick atleast 1 activity");
    }
    if (state.images.length < 4) {
      action.setFieldError("images", "Please upload atleast 4 campground images");
    }
    try {
      setLoading(true);
      const response = await YelpCamp.post("/campgrounds", { ...state, user: user });
      const { campground } = response.data;
      if (response.status === 201) navigate(`/dashboard/campgrounds/${campground._id}`);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <Dialog id="new_camp" title="New Campground" width="max-w-2xl">
      <div className="gap-4">
        <Formik
          validationSchema={newCampgroundSchema}
          initialValues={initialNewCampgroundVal}
          onSubmit={handleNewCampground}
        >
          {({ errors, touched }) => (
            <Form className="mt-2 ">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full ">
                  <label htmlFor="" className="label">
                    <span className="label-text text-white">Camp name</span>
                    {errors.campName && touched.campName && (
                      <span className="label-text-alt text-red-900">{errors.campName}</span>
                    )}
                  </label>
                  <Field
                    type="text"
                    name="campName"
                    placeholder="Campsite name"
                    className="input input-bordered bg-white"
                  />
                </div>

                <div className="form-control w-full ">
                  <label htmlFor="" className="label">
                    <span className="label-text text-white">Camp type</span>
                    {errors.type && touched.type && (
                      <span className="label-text-alt text-red-900">{errors.type}</span>
                    )}
                  </label>
                  <Field as="select" name="type" className="select select-bordered w-full bg-white">
                    <option value="PUBLIC">PUBLIC</option>
                    <option value="PRIVATE">PRIVATE</option>
                  </Field>
                </div>
              </div>

              <div className="form-control w-full ">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Location</span>
                  {errors.location && touched.location && (
                    <span className="label-text-alt text-red-900">{errors.location}</span>
                  )}
                </label>
                <Field
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered bg-white"
                />
              </div>

              <div className="form-control w-full ">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Description</span>
                  {errors.description && touched.description && (
                    <span className="label-text-alt text-red-900">{errors.description}</span>
                  )}
                </label>
                <Field
                  as="textarea"
                  type="text"
                  name="description"
                  placeholder="A short or brief description about the campground"
                  className="textarea textarea-bordered bg-white resize-none"
                  cols={30}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full">
                  <label htmlFor="" className="label">
                    <span className="label-text text-white">Amenities</span>
                    {errors.amenities ? (
                      <span className="label-text-alt text-red-900">{errors.amenities}</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <ul>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("amenities", "Campfire")}
                      />{" "}
                      <span>
                        <CampIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Campfire</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("amenities", "WiFi")}
                      />{" "}
                      <span>
                        <WifiIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">WiFi</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("amenities", "Shower / Restroom")}
                      />{" "}
                      <span>
                        <ShowerIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Shower / Restroom</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("amenities", "Trail")}
                      />{" "}
                      <span>
                        <TrailIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Trail</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() =>
                          handleCampFeature("amenities", "Picnic Tables / Restaurants")
                        }
                      />{" "}
                      <span>
                        <UtensilsIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Picnic Tables / Restaurants</span>
                    </li>
                  </ul>
                </div>

                <div className="form-control w-full">
                  <label htmlFor="" className="label">
                    <span className="label-text text-white">Activities</span>
                    {errors.activities ? (
                      <span className="label-text-alt text-red-900">{errors.activities}</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <ul>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("activities", "Fishing")}
                      />{" "}
                      <span>
                        <FishIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Fishing</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("activities", "Boating")}
                      />{" "}
                      <span>
                        <BoatIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Boating</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("activities", "Hiking")}
                      />{" "}
                      <span>
                        <HikeIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Hiking</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("activities", "Swimming")}
                      />{" "}
                      <span>
                        <WaterIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Swimming</span>
                    </li>
                    <li className="flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                        onClick={() => handleCampFeature("activities", "Stargazing")}
                      />{" "}
                      <span>
                        <StarIcon width="18" height="18" className="ml-1" />
                      </span>
                      <span className="text-sm ml-1">Stargazing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" flex flex-col my-4">
                <div className="flex gap-4">
                  {acceptedFiles.map((file) => (
                    <div className="relative" key={file.id}>
                      <img src={file.url} alt="" width={120} height={120} />
                      <button
                        className="text-white absolute top-0 right-1  rounded-xl"
                        onClick={() => handleRemoveFile(file.id)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
                <DropZone onDrop={onDrop} />
              </div>

              {error ? <p className="text-red-900 text-sm text-center">File not supported</p> : ""}
              {acceptedFiles.length < 4 && (
                <p className="text-red-900 text-sm text-center">
                  NOTE: Please upload atleast 4 camp images.
                </p>
              )}
              <button
                disabled={
                  acceptedFiles === undefined ||
                  acceptedFiles.length == 0 ||
                  acceptedFiles.length < 4 ||
                  loading
                    ? true
                    : false
                }
                type="submit"
                className="btn w-full btn-secondary mt-4"
              >
                {loading ? <span className="loading loading-spinner"></span> : "POST"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Dialog>
  );
}
export default NewCampgroundDialog;
