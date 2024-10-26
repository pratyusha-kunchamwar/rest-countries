import { useEffect, useState } from "react";
import ErrorPage from "../pages/ErrorPage";

const API_URL = "https://restcountries.com/v3.1/all";

function FetchApiData({ onDataFeatch }) {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const featchCountriesData = async () => {
      setIsloading(true);
      try {
        const countriesData = await fetch(API_URL);
        const response = await countriesData.json();
        onDataFeatch(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    featchCountriesData();
  }, []);

  // for the Edge case
  if (isloading) {
    <div>loading.............</div>;
  }
  if (error) {
    <div>
      <ErrorPage/>
    </div>
  }

  return null;
}

export default FetchApiData;
