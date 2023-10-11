import { FormikHelpers } from "formik";
import { FormikSignUp } from "@interfaces/FormikInterface";
import YelpCamp from "api/config";

export const initialSignupVal: FormikSignUp = {
  emailAddress: "",
  password: "",
  confirmPassword: "",
  loading: false,
};

export const handleSignup = async (
  state: FormikSignUp,
  action: FormikHelpers<typeof initialSignupVal>
) => {
  try {
    action.setFieldValue("loading", true);
    const { loading, ...rest } = state;
    const response = await YelpCamp.post("/users", { ...rest, provider: "EMAIL" });
    console.log(response);
    action.setFieldValue("loading", false);
  } catch (e) {
    console.log(e);
  }
};
