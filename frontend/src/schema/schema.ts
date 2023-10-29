import * as yup from "yup";

export const signupSchema = yup.object().shape({
  emailAddress: yup.string().email("Must be a valid emailaddress.").required("Required *"),
  password: yup.string().required("Required *").min(8, "Passowrd is too short."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match.")
    .required("Required *"),
});

export const signinSchema = yup.object().shape({
  emailAddress: yup.string().email("Must be a valid emailaddress.").required("Required *"),
  password: yup.string().required("Required *").min(8, "Passowrd is too short."),
});

export const newCampgroundSchema = yup.object().shape({
  campName: yup.string().required("Required *"),
  type: yup
    .string()
    .oneOf(["PUBLIC", "PRIVATE"], "Camp Type should be PUBLIC or PRIVATE.")
    .required("Required *"),
  location: yup.string().required("Required *"),
  description: yup
    .string()
    .required("Required *")
    .max(250, "Maximum of 250 characters only")
    .min(20, "Minimum of 20 characters"),
});
