import { useNavigate } from "react-router-dom";

const Borders = ({ borders, theme }) => {
  const navigate = useNavigate();

  return (
    <div>
      <p>
        <strong>Border Countries:</strong>
      </p>
      <div>
        {borders ? (
          borders.map((border, index) => (
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
  );
};

export default Borders;
