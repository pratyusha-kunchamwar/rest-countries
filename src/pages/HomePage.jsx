import { useState } from "react";
import Header from "../components/Header";
import SearchCountries from "../components/SearchCountries";
import Featch from "../components/Featch";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Featch onDataFeatch={(data) => setCountries(data)} />
      <Header />
      <SearchCountries countries={countries} />
    </>
  );
};

export default HomePage;
