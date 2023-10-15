import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeButton from "@components/ui/theme";
import sign from "assets/sign.jpg";
import logo from "@assets/logo.png";
import FacebookComponent from "@components/facebook";
import GoogleComponent from "@components/google";
import EyeIcon from "@components/icons/eye";
import EyeSlashIcon from "@components/icons/eye-slash";
import { handleSignin, initialSigninVal } from "@actions/signin";
import { signinSchema } from "@schema/schema";

function Signin() {
  const navigate = useNavigate();
  const [viewPass, setViewPass] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <section className=" hidden lg:block">
        <img src={sign} alt="" className="h-full object-cover" />
      </section>

      <section className="p-4 h-screen flex flex-col">
        <section className="flex content-center justify-between">
          <Link to="/" className="flex content-center">
            <img src={logo} alt="YelpCamp PH" width={60} height={60} />
            <span className="my-auto  text-xl font-semibold ">YelpCamp PH</span>
          </Link>
          <ThemeButton />
        </section>

        <section className="flex-grow px-20 py-4 w-full ">
          <div className="h-full xl:px-10 flex flex-col justify-evenly">
            <div>
              <div>
                <h1 className="text-lg text-center font-bold sm:text-2xl ">Login YelpCamp PH</h1>
                <p className="text-xs text-center sm:text-sm ">
                  Discover the Great Outdoors with YelpCamp!
                </p>
              </div>
              <Formik
                initialValues={initialSigninVal}
                validationSchema={signinSchema}
                onSubmit={(state, action) => handleSignin(state, action, navigate)}
              >
                {({ errors, touched, values }) => (
                  <Form className="mt-4 w-full">
                    {/* Email Address */}
                    <div className="form-control w-full  ">
                      <label className="label">
                        <span className="label-text text-secondary">Email Address</span>
                        {errors.emailAddress && touched.emailAddress && (
                          <span className="label-text-alt text-error">{errors.emailAddress}</span>
                        )}
                      </label>
                      <Field
                        type="text"
                        name="emailAddress"
                        placeholder="Email address"
                        className="input bg-slate-200 "
                      />
                    </div>
                    {/* Password */}

                    <div className="form-control w-full   mt-3">
                      <label className="label">
                        <span className="label-text text-secondary">Password</span>
                        {errors.password && touched.password && (
                          <span className="label-text-alt text-error">{errors.password}</span>
                        )}
                      </label>
                      <div className="join w-full">
                        <Field
                          name="password"
                          type={showPass ? "text" : "password"}
                          placeholder="Password"
                          className="input bg-slate-200 join-item w-full"
                          onClick={() => setViewPass(true)}
                        />
                        {viewPass && (
                          <button
                            className="btn btn-ghost rounded-tl-none rounded-bl-none  bg-slate-200"
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                          >
                            {showPass ? (
                              <EyeSlashIcon width="24" height="24" className="join-item" />
                            ) : (
                              <EyeIcon width="24" height="24" className="join-item" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`btn  w-full mt-8 ${
                        values.loading === true
                          ? "pointer-events-none bg-[#D3D3D3] border-none"
                          : "btn-primary"
                      }`}
                    >
                      {values.loading === true ? (
                        <span className="loading loading-spinner text-primary"></span>
                      ) : (
                        "CREATE AN ACCOUNT"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            <div>
              <div className="divider my-8 w-full  text-sm">OR</div>
              <div className="w-full  grid grid-cols-1 gap-4  lg:grid-cols-2">
                <FacebookComponent />
                <GoogleComponent />
              </div>
              <p className="text-sm text-center mt-4">
                Don't have an account?{" "}
                <Link className="text-primary" to="/sign-up">
                  Sign up!
                </Link>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Signin;
