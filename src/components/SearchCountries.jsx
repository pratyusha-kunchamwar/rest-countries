import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as serchicon } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import AllCards from "./AllCards";
import { useTheme } from "./ThemeProvider";

import {
  findRegions,
  findSubRegions,
  filterCountries,
  findArea,
  findPopulation,
} from "./helper";

function SearchCountries({ countries }) {
  const { theme } = useTheme();

  const [searchedCountry, setSearchedCountry] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const [selectSubregion, setSelectSubregion] = useState("");
  const [selectPopulation, setSelectPopulation] = useState("");
  const [selectArea, setSelectArea] = useState("");

  // drop down data
  let regions = findRegions(countries);
  let subRegions = findSubRegions(countries, selectRegion);
  let population = findPopulation();
  let area = findArea();

  // for filterring the data
  const filterdData = filterCountries(
    countries,
    searchedCountry,
    selectRegion,
    selectSubregion,
    selectPopulation,
    selectArea
  );

  return (
    <>
      <div
        className={` ${
          theme === "dark" ? "bg-veryDarkBlue-100 " : "bg-veryLightGray"
        } px-6 py-8 flex flex-col gap-10 sm:flex-row sm:justify-between`}
      >
        {/* for country search */}
        <div className="relative bg-white w-full shadow-md rounded-lg h-20 flex items-center sm:h-12">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FontAwesomeIcon icon={serchicon} size="lg" />
          </span>
          <input
            type="text"
            value={searchedCountry}
            onChange={(e) => setSearchedCountry(e.target.value)}
            placeholder="Search for a country..."
            className={`${
              theme === "dark"
                ? "bg-darkBlue text-white"
                : "bg-white text-black"
            } pl-10 py-2 border  rounded-md shadow-lg w-full h-20 sm:h-12`}
          />
        </div>

        {/* for regions  */}
        <Dropdown
          label="select By Region"
          value={selectRegion}
          options={regions}
          onChange={(value) => setSelectRegion(value)}
        />
        {/* subregion */}
        <Dropdown
          label="select By SubRegion"
          value={selectSubregion}
          options={subRegions}
          onChange={(value) => setSelectSubregion(value)}
        />
        {/* sort population*/}
        <Dropdown
          label="sort Population"
          value={selectPopulation}
          options={population}
          onChange={(value) => setSelectPopulation(value)}
        />
        {/* sort area*/}
        <Dropdown
          label="sort Area"
          value={selectArea}
          options={area}
          onChange={(value) => setSelectArea(value)}
        />
      </div>
      {/* creating the cards */}
      <AllCards filterdData={filterdData} />
    </>
  );
}

export default SearchCountries;
