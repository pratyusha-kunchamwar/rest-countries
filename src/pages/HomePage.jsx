import SearchCountries from "../components/SearchCountries";
import FetchApiData from "../components/FetchApiData";
import Spinner from "../components/Spinner";
import ErrorPage from "./ErrorPage";

const API_URL = "https://restcountries.com/v3.1/all";

const HomePage = () => {
  const { countries, error, isLoading } = FetchApiData(API_URL);

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
