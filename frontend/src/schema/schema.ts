import * as yup from "yup";

export const signupSchema = yup.object().shape({
  emailAddress: yup.string().email("Must be a valid emailaddress.").required("Required *"),
  password: yup.string().required("Required *").min(8, "Passowrd is too short."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match.")
    .required("Required *"),
});
