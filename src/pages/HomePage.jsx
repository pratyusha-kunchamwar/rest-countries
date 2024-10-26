import { useState } from "react";
import Header from "../components/Header";
import SearchCountries from "../components/SearchCountries";
import FetchApiData from "../components/FetchApiData";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <FetchApiData onDataFeatch={(data) => setCountries(data)} />
      <Header />
      <SearchCountries countries={countries} />
    </>
  );
};

export default HomePage;
