import { useEffect, useState } from "react";
import ErrorPage from "../pages/ErrorPage";
import Spinner from "./Spinner";

const API_URL = "https://restcountries.com/v3.1/all";

function FetchApiData({ onDataFeatch }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const featchCountriesData = async () => {
      setIsLoading(true);
      try {
        const countriesData = await fetch(API_URL);

        const response = await countriesData.json();
        onDataFeatch(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    featchCountriesData();
  }, []);

  // for the Edge case
  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }
  if (error) {
    return <ErrorPage message={error} />;
  }

  return null;
}

export default FetchApiData;
