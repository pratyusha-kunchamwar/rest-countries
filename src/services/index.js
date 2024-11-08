import { getData } from "../api";

export const getCountries = () => getData("/all");
export const getCountryDetails = (id) => getData(`/alpha/${id}`);
