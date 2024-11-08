import SearchCountries from "../SearchCountries";
import FetchApiData from "../FetchApiData";
import Spinner from "../common/Spinner";
import ErrorPage from "./ErrorPage";

import { getCountries } from "../../services";



const HomePage = () => {
  const { countries, error, isLoading } = FetchApiData(getCountries);

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <>
      {countries.length > 0 ? (
        <SearchCountries countries={countries} />
      ) : (
        <p>NO Countries found</p>
      )}
    </>
  );
};

export default HomePage;
