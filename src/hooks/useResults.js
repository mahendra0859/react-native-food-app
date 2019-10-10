import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import data from "../data/data.json";

export default () => {
  const [results, setResults] = useState([]),
    [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" }
      });
      setResults(response.data.businesses);
    } catch (err) {
      // setResults(data);
      setErrorMessage("Something went wrong!");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage];
};
