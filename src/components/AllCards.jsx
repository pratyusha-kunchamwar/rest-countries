import Card from "./Card";
import { useTheme } from "../theme/ThemeProvider";

const AllCards = ({ filteredData }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`grid grid-cols-1 min-h-screen xsm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 place-content-center  ${
        theme === "dark" ? "bg-veryDarkBlue-100 " : "bg-veryLightGray"
      }`}
    >
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((country, index) => (
          <Card key={index} country={country} />
        ))
      ) : (
        <p>No countries found.</p> 
      )}
    </div>
  );
};

export default AllCards;
