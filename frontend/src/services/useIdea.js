import { useState, useEffect } from "react";
import { apiCall } from "./api";

// const url = "http://localhost:3000/api/ideas";
// because I'm using vite, so set up the proxy in vite.config.js
// instead of adding the proxy attribute to package.json

const useIdea = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const url = "/api/ideas";

  useEffect(() => {
    const fetchData = async () => {
      apiCall("get", url)
        .then((data) => setData(data))
        .catch((error) => {
          setError("fetching data error: " + error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  const addIdea = async (newIdea) => {
    try {
      const postedData = await apiCall("post", url, newIdea);
      setData((prevData) => [...prevData, postedData]);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteIdea = async (id) => {
    try {
      await apiCall("delete", `${url}/${id}`);
      setData((prevData) => [...prevData.filter((idea) => idea._id != id)]);
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, loading, error, addIdea, deleteIdea };
};

export default useIdea;
