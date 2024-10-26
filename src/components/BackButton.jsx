import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";

const BackButton = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();
  return (
    <button
      className={`${
        theme === "dark" ? "bg-darkBlue text-white" : "bg-white text-black"
      } h-12 w-20 card shadow-lg rounded-md mb-4`}
    onClick={() => navigate("/")}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </button>
  );
};

export default BackButton;
