import error from "../assets/error.jpg";
import BackButton from "../components/BackButton";

const ErrorPage = () => {
  return (
    <>
      <div className="px-10 pt-10 mb-4">
        <BackButton />
        <div className="w-full h-full flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4 align-center mx-auto">
            Oops! Something went wrong.
          </h2>
          <img src={error} alt="error-image" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
