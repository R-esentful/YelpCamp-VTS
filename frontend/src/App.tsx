import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "@pages/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
    </>
  )
);
function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
