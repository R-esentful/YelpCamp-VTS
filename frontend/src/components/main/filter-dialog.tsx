import Dialog from "@components/ui/dialog";
import CampIcon from "@components/icons/camp";
import { Field, Formik, Form } from "formik";

function FilterDialog() {
  const initialValue = {
    campName: "",
  };
  // errors, touched, values
  const handleSubmit = () => {};
  return (
    <Dialog id="filter" title="Filter">
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        {() => (
          <Form className="mt-2 ">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control w-full ">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Camp name</span>
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
                  <span className="label-text text-white">Camp name</span>
                </label>
                <Field as="select" className="select select-bordered w-full bg-white">
                  <option value="Free">Free</option>
                  <option value="Fee">With Fee</option>
                </Field>
              </div>
            </div>

            <div className="form-control w-full ">
              <label htmlFor="" className="label">
                <span className="label-text text-white">Location</span>
              </label>
              <Field
                type="text"
                name="campName"
                placeholder="Location"
                className="input input-bordered bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Amenities</span>
                </label>
                <ul>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
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
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">WiFi</span>
                  </li>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Shower / Restroom</span>
                  </li>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Trail</span>
                  </li>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Picnic Tables / Restaurants</span>
                  </li>
                </ul>
              </div>

              <div className="form-control w-full">
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Activities</span>
                </label>
                <ul>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Fishing</span>
                  </li>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Boating</span>
                  </li>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Hiking</span>
                  </li>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Swimming</span>
                  </li>
                  <li className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="checkbox checkbox-xs checkbox-primary bg-white my-auto"
                    />{" "}
                    <span>
                      <CampIcon width="18" height="18" className="ml-1" />
                    </span>
                    <span className="text-sm ml-1">Stargazing</span>
                  </li>
                </ul>
              </div>
            </div>
            <button type="submit" className="btn w-full btn-secondary mt-4">
              APPLY FILTER
            </button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
export default FilterDialog;
