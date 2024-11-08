import error from "../../assets/error.jpg";
import BackButton from "../common/BackButton";
import { useTheme } from "../../theme/ThemeProvider";

const ErrorPage = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`flex flex-col gap-1   ${
          theme === "dark"
            ? "bg-veryDarkBlue-100 text-white"
            : "bg-veryLightGray"
        }`}
      >
        <div className="w-[90%] h-[60%] flex flex-col justify-center  p-10 ">
          <BackButton />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-4 align-center mx-auto">
              Oops! Something went wrong.
            </h2>
            <img src={error} alt="error-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
