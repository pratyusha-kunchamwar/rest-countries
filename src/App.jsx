import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:code" element={<CountryDetailPage />} />
      </>
    )
  );
return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
