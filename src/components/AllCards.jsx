import Card from "./Card";

const AllCards = ({ filterdData }) => {
  return (
    <div className="grid grid-cols-1  xsm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 place-content-center">
      {filterdData.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
};

export default AllCards;
