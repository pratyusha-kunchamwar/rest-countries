import { useState } from "react";
import SearchCountries from "../components/SearchCountries";
import FetchApiData from "../components/FetchApiData";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <FetchApiData onDataFeatch={(data) => setCountries(data)} />
      <SearchCountries countries={countries} />
    </>
  );
};

export default HomePage;
