import { useTheme } from "./ThemeProvider";

const Dropdown = ({ label, options, value, onChange }) => {
  const { theme } = useTheme();

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${
        theme === "dark" ? "bg-darkBlue text-white" : "bg-white text-black"
      } shadow-md font-semibold rounded-md w-full text-xl h-20 px-2 sm:h-12 sm:text-sm  mx-auto`}
    >
      <option value="all">{label}</option>
      {options.map((option,index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
