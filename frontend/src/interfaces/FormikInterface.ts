export interface FormikSignUp {
  emailAddress: string;
  password: string;
  confirmPassword: string;
  provider: string;
}

export interface FormikSignin {
  emailAddress: string;
  password: string;
  loading: boolean;
  provider: string;
}
