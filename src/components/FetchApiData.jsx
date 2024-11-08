import { useEffect, useState } from "react";

function FetchApiData(apiMethod) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await apiMethod();

        setCountries(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [apiMethod]);

  return { countries, error, isLoading };
}

export default FetchApiData;
