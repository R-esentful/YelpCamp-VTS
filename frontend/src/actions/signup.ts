import { FormikHelpers } from "formik";
import { FormikSignUp } from "@interfaces/FormikInterface";
import YelpCamp from "actions/config";

export const initialSignupVal: FormikSignUp = {
  emailAddress: "",
  password: "",
  confirmPassword: "",
  provider: "EMAIL",
};

export const handleSignup = async (
  state: FormikSignUp,
  action: FormikHelpers<typeof initialSignupVal>
) => {
  try {
    const response = await YelpCamp.post("/users", { ...state });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
