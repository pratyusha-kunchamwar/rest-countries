import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
    const navigate = useNavigate();
  return (
    <button
    className="p-3 card shadow-lg rounded-md mb-4"
    onClick={() => navigate("/")}
  >
    <FontAwesomeIcon icon={faArrowLeft} />
    Back
  </button>
  )
}

export default BackButton