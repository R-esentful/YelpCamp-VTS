import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "@pages/Landing";
import Signup from "@pages/Signup";
import Signin from "@pages/Signin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DashboardLayout from "@layouts/DashboardLayout";
import Main from "@pages/Dashboard/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Main />} />
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
