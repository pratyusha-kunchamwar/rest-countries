import { useState } from "react";

import { useTheme } from "../theme/ThemeProvider";
import Dropdown from "./Dropdown";
import AllCards from "./AllCards";
import InputSerch from "./InputSerch";

import {
  findRegions,
  findSubRegions,
  filterCountries,
  findArea,
  findPopulation,
} from "../utils/helper";

function SearchCountries({ countries }) {
  const { theme } = useTheme();

  const [searchCriteria, setSearchCriteria] = useState({
    searchedCountry: "",
    selectRegion: "",
    selectSubregion: "",
    selectPopulation: "",
    selectArea: "",
  });
  const handleSerch = (key, value) => {
    setSearchCriteria((prev) => ({ ...prev, [key]: value }));
  };

  // drop down data getting from helper
  let regions = findRegions(countries);
  let subRegions = findSubRegions(countries, searchCriteria.selectRegion);
  let population = findPopulation();
  let area = findArea();

  // for filtering the data selected in Drop downs
  const filteredData = filterCountries(
    countries,
    searchCriteria.searchedCountry,
    searchCriteria.selectRegion,
    searchCriteria.selectSubregion,
    searchCriteria.selectPopulation,
    searchCriteria.selectArea
  );

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "bg-veryDarkBlue-100" : "bg-veryLightGray"
        } px-6 py-8 flex flex-col gap-10 sm:flex-row sm:justify-between`}
      >
        {/* for country search */}
        <InputSerch
          value={searchCriteria.searchedCountry}
          onChange={(e) => handleSerch("searchedCountry", e.target.value)}
        />
        {/* for regions */}
        <Dropdown
          props={{
            label: "Select By Region",
            value: searchCriteria.selectRegion,
            options: regions,
            onChange: (e) => handleSerch("selectRegion", e.target.value),
          }}
        />
        {/* subregion */}
        {searchCriteria.selectRegion &&
          searchCriteria.selectRegion !== "all" && (
            <Dropdown
              props={{
                label: "Select By SubRegion",
                value: searchCriteria.selectSubregion,
                options: subRegions,
                onChange: (e) => handleSerch("selectSubregion", e.target.value),
              }}
            />
          )}
        {/* sort population */}
        <Dropdown
          props={{
            label: "Sort Population",
            value: searchCriteria.selectPopulation,
            options: population,
            onChange: (e) => handleSerch("selectPopulation", e.target.value),
          }}
        />
        {/* sort area */}
        <Dropdown
          props={{
            label: "Sort Area",
            value: searchCriteria.selectArea,
            options: area,
            onChange: (e) => handleSerch("selectArea", e.target.value),
          }}
        />
      </div>
      {/* creating the cards */}
      <AllCards filteredData={filteredData} />
    </>
  );
}

export default SearchCountries;
