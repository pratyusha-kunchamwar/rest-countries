import Card from "./Card";
import { useTheme } from "./ThemeProvider";

const AllCards = ({ filterdData }) => {
  const { theme } = useTheme();
  
  return (
    <div
      className={`grid grid-cols-1  xsm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 place-content-center  ${
        theme === "dark" ? "bg-veryDarkBlue-100 " : "bg-veryLightGray"
      }`}
    >
      {filterdData.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
};

export default AllCards;
