import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CountryDetailPage from "./components/pages/CountryDetailPage";
import ErrorPage from "./components/pages/ErrorPage";
import MainLayout from "./layout/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/*" element={<ErrorPage />} />
        <Route index element={<HomePage />} />
        <Route path="/country/:code" element={<CountryDetailPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
