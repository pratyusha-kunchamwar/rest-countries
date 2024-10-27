import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import Spinner from "./Spinner";
import BackButton from "./BackButton";
import ErrorPage from "../pages/ErrorPage";
import FetchApiData from "./FetchApiData"

const API_URL = "https://restcountries.com/v3.1/alpha";

const DetailCountryPage = () => {
  const { theme } = useTheme();

  const { code } = useParams();
  const navigate = useNavigate();

  const { countries, error, isLoading } = FetchApiData(`${API_URL}/${code}`);
  const country = countries[0];

  // for edge case
  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }
  if (error) {
    return <ErrorPage message={error} />;
  }
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-veryDarkBlue-100 " : "bg-veryLightGray"
      }mx-auto  min-h-screen `}
    >
      {/* container */}
      <div className="px-10 pt-10 flex flex-col justify-center items-start  ">
        <BackButton />
        {/* subContainer */}
        {country && (
          <div className="flex flex-col pt-20 items-center sm:flex-row sm:mt-0 gap-40   ">
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
        )}
      </div>
    </div>
  );
};

export default DetailCountryPage;
