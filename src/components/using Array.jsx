// import { useNavigate, useParams} from "react-router-dom";

// const DetailCountryPage = ({ countries }) => {
//   const { code } = useParams();
//   const navigate = useNavigate();

//   const country = countries.find((country) => country.ccn3 === code);

//   if (!country) {
//     return <p>Country not Found</p>;
//   }

//   return (
//     <div className="mx-auto my-10 ">
//       <div className="px-10 pt-10 ">
//         <button
//           className="p-3 card shadow-lg rounded-md "
//           onClick={() => navigate(-1)}
//         >
//           Back
//         </button>

//         <div className="mt-4 flex-col transform hover:scale-105 transition-transform duration-300 sm:flex">
//           {/* image */}
//           <div className="w-full h-[30%]">
//             <img
//               className="w-full h-full"
//               src={country.flags.png}
//               alt={country.name.common}
//             />
//           </div>
//           {/* content */}

//           {/* name */}
//           <div className="flex-col mx-auto">
//             <p className="text-3xl font-bold">{country.name.common}</p>
//             <div className="flex-col">
//               {/* first part */}
//               <div>
//                 <p>
//                   <strong>Native Name:</strong>{" "}
//                   {country.name.nativeName
//                     ? Object.values(country.name.nativeName)[0].common
//                     : "NA"}
//                 </p>
//                 <p>
//                   <strong>Population: </strong>
//                   {country.population}
//                 </p>
//                 <p>
//                   <strong>Region: </strong> {country.region}
//                 </p>
//                 <p>
//                   <strong>Sub Region: </strong> {country.subregion}
//                 </p>
//                 <p>
//                   <strong>Capital: </strong>
//                   {country.capital ? country.capital[0] : "NA"}
//                 </p>
//               </div>
//               {/* second part */}
//               <div>
//                 <p>
//                   <strong>Top Level Domain: </strong>
//                   {country.tld ? country.tld[0] : "NA"}
//                 </p>
//                 <p>
//                   <strong>Currencies:</strong>
//                   {country.currencies
//                     ? Object.values(country.currencies)
//                         .map((currency) => currency.name)
//                         .join(", ")
//                     : "NA"}
//                 </p>
//                 <p>
//                   <strong>Languages:</strong>{" "}
//                   {country.languages
//                     ? Object.values(country.languages).join(", ")
//                     : "NA"}
//                 </p>
//               </div>
//             </div>
//             {/* third part */}
//             <div>
//               <p>
//                 <strong>Border Countries: </strong>
//               </p>

//               {country.borders ? (
//                 country.borders.map((border, index) => (
//                   <button
//                     key={index}
//                     onClick={() => navigate(`/country/${border}`)}
//                     className="m-1 p-2 border border-gray-300 rounded card shadow-lg"
//                   >
//                     {border}
//                   </button>
//                 ))
//               ) : (
//                 <p>None</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailCountryPage;