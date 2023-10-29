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

export interface FormikNewCampground {
  campName: string;
  type: string;
  location: string;
  description: string;
  amenities: string[];
  activities: string[];
  // images: File[];
  images: string[];
}
