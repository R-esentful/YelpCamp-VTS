import { FormikSignin } from "@interfaces/FormikInterface";
import { FormikHelpers } from "formik";
import YelpCamp from "./config";

export const initialSigninVal: FormikSignin = {
  emailAddress: "",
  password: "",
  loading: false,
  provider: "EMAIL",
};

export const handleSignin = async (
  state: FormikSignin,
  action: FormikHelpers<typeof initialSigninVal>,
  navigate: any
) => {
  try {
    action.setFieldValue("loading", true);
    const { loading, ...rest } = state;
    const response = await YelpCamp.post("/users", { ...rest });
    console.log(response);
    action.setFieldValue("loading", false);
    navigate("/dashboard");
  } catch (e) {
    console.log(e);
  }
};
