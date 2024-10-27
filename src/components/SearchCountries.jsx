import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as searchIcon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";
import Dropdown from "./Dropdown";
import AllCards from "./AllCards";

import {
  findRegions,
  findSubRegions,
  filterCountries,
  findArea,
  findPopulation,
} from "../Util/helper";

function SearchCountries({ countries }) {
  const { theme } = useTheme();

  const [searchCriteria, setSearchCriteria] = useState({
    searchedCountry: "",
    selectRegion: "",
    selectSubregion: "",
    selectPopulation: "",
    selectArea: "",
  });

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

  const handleSerch = (key, value) => {
    setSearchCriteria((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "bg-veryDarkBlue-100" : "bg-veryLightGray"
        } px-6 py-8 flex flex-col gap-10 sm:flex-row sm:justify-between`}
      >
        {/* for country search */}
        <div className="relative bg-white w-full shadow-md rounded-lg h-20 flex items-center sm:h-12">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FontAwesomeIcon icon={searchIcon} size="lg" />
          </span>
          <input
            type="text"
            value={searchCriteria.searchedCountry}
            onChange={(e) => handleSerch("searchedCountry", e.target.value)}
            placeholder="Search for a country..."
            className={`${
              theme === "dark"
                ? "bg-darkBlue text-white"
                : "bg-white text-black"
            } pl-10 py-2 border rounded-md shadow-lg w-full h-20 sm:h-12`}
          />
        </div>

        {/* for regions */}
        <Dropdown
          label="Select By Region"
          value={searchCriteria.selectRegion}
          options={regions}
          onChange={(value) => handleSerch("selectRegion", value)}
        />

        {/* subregion */}
        {searchCriteria.selectRegion &&
          searchCriteria.selectRegion !== "all" && (
            <Dropdown
              label="Select By SubRegion"
              value={searchCriteria.selectSubregion}
              options={subRegions}
              onChange={(value) => handleSerch("selectSubregion", value)}
            />
          )}

        {/* sort population */}
        <Dropdown
          label="Sort Population"
          value={searchCriteria.selectPopulation}
          options={population}
          onChange={(value) => handleSerch("selectPopulation", value)}
        />

        {/* sort area */}
        <Dropdown
          label="Sort Area"
          value={searchCriteria.selectArea}
          options={area}
          onChange={(value) => handleSerch("selectArea", value)}
        />
      </div>
      {/* creating the cards */}
      <AllCards filteredData={filteredData} />
    </>
  );
}

export default SearchCountries;
