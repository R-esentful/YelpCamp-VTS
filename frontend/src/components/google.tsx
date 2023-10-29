import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import YelpCamp from "@actions/config";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate, loading } from "@store/features/userSlice";

function GoogleComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      const profile = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${res.access_token}` },
      });
      const data = {
        emailAddress: profile.data.email,
        name: profile.data.name,
        profileImage: profile.data.picture,
        provider: "GOOGLE",
      };

      try {
        const response = await YelpCamp.post("/users", { ...data });

        const { user, token, message } = response.data;
        console.log(message);
        dispatch(
          authenticate({
            id: user._id,
            email: user.emailAddress,
            token,
            picture: user.profileImage,
            name: user.name,
          })
        );
        dispatch(loading({ loading: false }));

        if (response.status === 201 || response.status === 200)
          navigate("/dashboard", { state: { from: location.pathname } });
      } catch (e) {
        dispatch(loading({ loading: false }));
        console.log(e);
      }
    },
  });

  return (
    <button
      className="btn btn-ghost"
      onClick={() => {
        dispatch(loading({ loading: true }));
        handleGoogleLogin();
      }}
    >
      <FcGoogle className="align-middle my-auto  w-[23px] h-[23px]" /> <span>google</span>
    </button>
  );
}
export default GoogleComponent;
