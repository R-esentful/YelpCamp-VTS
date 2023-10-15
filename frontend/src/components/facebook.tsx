import { BiLogoFacebookCircle } from "react-icons/bi";
import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import { useEffect } from "react";
import YelpCamp from "@actions/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate, loading } from "@store/features/userSlice";

function FacebookComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const initialization = async () => {
      await FacebookLoginClient.loadSdk("en_US");
      FacebookLoginClient.init({ appId: "964651414807742", version: "v16.0" });
    };

    initialization();
  }, []);
  const handleFBLogin = async () => {
    dispatch(loading({ loading: true }));
    FacebookLoginClient.login(
      () => {
        FacebookLoginClient.getProfile(
          async (res: any) => {
            const data = {
              emailAddress: res.email,
              name: res.name,
              profileImage: res.picture.data.url,
              provider: "FACEBOOK",
            };

            try {
              const response = await YelpCamp.post("/users", { ...data });
              const { user, token, message } = response.data;
              console.log(message);
              dispatch(
                authenticate({
                  email: user.emailAddress,
                  token,
                  picture: user.profileImage,
                  name: user.name,
                })
              );
              dispatch(loading({ loading: false }));
              if (response.status === 201) navigate("/dashboard");
            } catch (e) {
              dispatch(loading({ loading: false }));
              console.log(e);
            }
          },
          {
            fields: "name,email,picture",
          }
        );
      },
      {
        scope: "public_profile, email",
      }
    );
  };

  return (
    <button className="btn btn-ghost" onClick={handleFBLogin}>
      <BiLogoFacebookCircle color="blue" className="align-middle my-auto  w-[24px] h-[24px]" />{" "}
      <span>Facebook</span>
    </button>
  );
}
export default FacebookComponent;
