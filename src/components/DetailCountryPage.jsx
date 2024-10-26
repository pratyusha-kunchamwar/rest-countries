import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

import BackButton from "./BackButton";

const DetailCountryPage = () => {
  const { theme } = useTheme();

  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);

  const ApiCall = async () => {
    setIsloading(true);
    try {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const responce = await res.json();
      setCountry(responce[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    ApiCall();
  }, [code]);

  if (error) return <div>{error}</div>;
  if (isloading) return <div>{isloading}</div>;

  // country check
  if (!country) return <div>Country data not available</div>;

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-veryDarkBlue-100 " : "bg-veryLightGray"
      }mx-auto  `}
    >
      {/* container */}
      <div className="px-10 pt-10 flex flex-col justify-center items-start gap-10">
        <BackButton />
        {/* subContainer */}

        <div className="flex flex-col items-center sm:flex-row gap-10">
          {/* image */}
          <div className="w-full lg:w-[40rem] lg:h-[30rem]">
            <img
              className="w-full h-full"
              src={country.flags.png}
              alt={country.name.common}
            />
          </div>

          <div
            className={`${
              theme === "dark" ? " text-white" : " text-black"
            } flex flex-col gap-10 `}
          >
            <p className="text-3xl font-bold">{country.name.common}</p>
            <div className="flex  max-lg:flex-col gap-10">
              {/* part1 */}
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
              {/* part2 */}
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
                    ? Object.values(country.languages).join(",")
                    : "NA"}
                </p>
              </div>
            </div>
            {/* part3 */}
            <div>
              <p>
                <strong>Border Countries:</strong>
              </p>
              <div>
                {country.borders ? (
                  country.borders.map((border, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(`/country/${border}`)}
                      className={`${
                        theme === "dark"
                          ? "bg-darkBlue text-white"
                          : "bg-white text-black"
                      } m-1 p-4 border border-gray-300 rounded card shadow-lg`}
                    >
                      {border}
                    </button>
                  ))
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCountryPage;
