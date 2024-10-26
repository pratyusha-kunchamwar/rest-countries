import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const Card = ({ country }) => {
  const { theme } = useTheme();

  return (
    <>
      <Link to={`/country/${country.ccn3}`}>
        <div
      className={`${
        theme === "dark" ? "bg-darkBlue text-white" : "bg-white text-black"
      } items-center m-8 shadow-md w-auto h-72 rounded-md overflow-hidden transform hover:scale-105 transition-transform duration-300`}
    >
          <div className=" max-w-auto h-36">
            <img
              className="object-cover w-full h-full "
              src={country.flags.png}
              alt={country.name.common}
            />
          </div>
          <div className="h-3/5 pt-6 pl-4 ">
            <h1 className="text-lg"><strong>{country.name.common}</strong></h1>
            <p>
              <strong>Population</strong>: {country.population}
            </p>
            <p>
              <strong>Region</strong> : {country.region}
            </p>
            <p>
              <strong>Capital</strong> : {country.capital}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
