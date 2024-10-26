import DetailCountryPage from "../components/DetailCountryPage";
import Header from "../components/Header";

const CountryDetailPage = ({ countries }) => {
  return (
    <>
      <Header />
      <DetailCountryPage countries={countries} />
    </>
  );
};

export default CountryDetailPage;
