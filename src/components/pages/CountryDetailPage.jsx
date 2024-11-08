import { useParams } from "react-router-dom";

import { useTheme } from "../../theme/ThemeProvider";
import { getCountryDetails } from "../../services";
import CountryInfo from "../CountryInfo";
import Borders from "../Borders";
import BackButton from "../common/BackButton";
import ErrorPage from "./ErrorPage";
import FetchApiData from "../FetchApiData";

const CountryDetailPage = () => {
  const { theme } = useTheme();
  const { code } = useParams();
  const { countries, error } = FetchApiData(() => getCountryDetails(code));
  const country = countries[0];
  // for edge case
  if (error) {
    return <ErrorPage message={error} />;
  }
  return (
    <>
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
              <div>
                <CountryInfo country={country} theme={theme} />
                {/* Borders */}
                <Borders borders={country.borders} theme={theme} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CountryDetailPage;
