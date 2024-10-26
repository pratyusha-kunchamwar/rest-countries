const Dropdown = ({ label, options=[], value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className=" bg-white shadow-md rounded-md w-full text-xl h-20 px-2 sm:h-12 sm:text-sm "
    >
      <option value="all">{label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
