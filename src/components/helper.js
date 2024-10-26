//for regions
const findRegions = (countries) => {
  let regions = countries.reduce((acc, country) => {
    acc.add(country.region);
    return acc;
  }, new Set());

  return [...regions];
};
// subregion
const findSubRegions = (countries, selectRegion) => {
  let set = new Set();
  let subRegionArr = countries.reduce((acc, country) => {
    if (country.region === selectRegion && !set.has(country.subregion)) {
      acc.push(country.subregion);
      set.add(country.subregion);
    }
    return acc;
  }, []);
  return subRegionArr;
};
//find population
const findPopulation = () => {
  let population = ["asc Population", "desc Population"];
  return population;
};
//find area
const findArea = () => {
  let area = ["asc Area", "desc Area"];
  return area;
};

//filtering the countriesx
const filterCountries = (
  countries,
  searchedCountry,
  selectRegion,
  selectSubregion,
  selectPopulation,
  selectArea
) => {
  let result = countries;

  if (searchedCountry) {
    result = result.filter((country) =>
      country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())
    );
  }
  //region
  if (selectRegion && selectRegion != "all") {
    result = result.filter((country) => country.region === selectRegion);
  }
  // subregion
  if (selectSubregion) {
    result = result.filter((country) => country.subregion === selectSubregion);
  }
  //for data sorting Population
  if (selectPopulation) {
    return sortData(
      result,
      "population",
      selectPopulation.includes("asc") ? "asc" : "desc"
    );
  }
  //to sort area
  if (selectArea) {
 return sortData(result,"area",selectArea.includes("asc")?"asc":"desc");
  }

  return result;
};
//custom sort function
const sortData = (result, property, order) => {
  return result.sort((a, b) =>
    order === "asc" ? a[property] - b[property] : b[property] - a[property]
  );
};

export {
  findRegions,
  findSubRegions,
  findPopulation,
  findArea,
  filterCountries,
};
