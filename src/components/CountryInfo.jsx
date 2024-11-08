const CountryInfo = ({ country, theme }) => {
    return (
      <div
        className={`${
          theme === "dark" ? " text-white" : " text-black"
        } flex flex-col gap-10`}
      >
        <p className="text-3xl font-bold">{country.name.common}</p>
        <div className="flex max-lg:flex-col gap-10">
          {/* Part 1 */}
          <div>
            <p>
              <strong>Native Name:</strong>
              {country.name.nativeName
                ? Object.values(country.name.nativeName)[0].common
                : "NA"}
            </p>
            <p>
              <strong>Population:</strong>
              {country.population}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Sub Region:</strong> {country.subregion}
            </p>
            <p>
              <strong>Capital:</strong>
              {country.capital ? country.capital.join(", ") : "NA"}
            </p>
          </div>
          {/* Part 2 */}
          <div>
            <p>
              <strong>Top Level Domain:</strong>
              {country.tld ? country.tld.join(", ") : "NA"}
            </p>
            <p>
              <strong>Currencies:</strong>
              {country.currencies
                ? Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")
                : "NA"}
            </p>
            <p>
              <strong>Languages:</strong>
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "NA"}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CountryInfo;
  