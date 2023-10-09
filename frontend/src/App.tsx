import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "@pages/Landing";
import Signup from "@pages/Signup";
import Signin from "@pages/Signin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
