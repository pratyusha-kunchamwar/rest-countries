import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as searchIcon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";

const InputSerch = ({ value, onChange }) => {
    const { theme } = useTheme();
  return (
    <div className="relative bg-white w-full shadow-md rounded-lg h-20 flex items-center sm:h-12">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      <FontAwesomeIcon icon={searchIcon} size="lg" />
    </span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search for a country..."
      className={`${
        theme === "dark"
          ? "bg-darkBlue text-white"
          : "bg-white text-black"
      } pl-10 py-2 border rounded-md shadow-lg w-full h-20 sm:h-12`}
    />
  </div>
  )
}

export default InputSerch