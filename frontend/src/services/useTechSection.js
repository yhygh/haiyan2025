import { useState, useEffect, useCallback } from "react";
import { apiCall } from "./api";

const useTechSection = () => {
  const [tsdata, setTsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const url = "http://localhost:3000/api/ts";
  // because I'm using vite, so set up the proxy in vite.config.js
  // instead of adding the proxy attribute to package.json
  const tsUrl = "/api/ts";
  const glUrl = "/api/gl";

  console.log(`====run useTechSection ===================\n`);

  useEffect(() => {
    const fetchData = async () => {
      apiCall("get", tsUrl)
        .then((data) => setTsData(data))
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [tsUrl]);

  const addTechSection = async (newTechSection) => {
    try {
      console.log(`newTechSection = `);
      console.log(newTechSection);
      const postedData = await apiCall("post", tsUrl, newTechSection);
      setTsData((prevData) => [...prevData, postedData]);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteTechsection = async (id) => {
    try {
      await apiCall("delete", `${tsUrl}/${id}`);
      setTsData((prevData) => [...prevData.filter((idea) => idea._id != id)]);
    } catch (error) {
      setError(error.message);
    }
  };

  const addGurulink = async (techId, newGurulink) => {
    try {
      const postedData = await apiCall(
        "post",
        `${glUrl}/ts/${techId}`,
        newGurulink
      );
      setTsData((prevData) => [
        ...prevData.map((item) => {
          if (item._id != techId) return item;
          let links = [...item.links, postedData];
          return { ...item, links: links };
        }),
      ]);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteGurulink = async (techId, linkId) => {
    try {
      await apiCall("delete", `${glUrl}/${linkId}/ts/${techId}`);
      setTsData((prevData) => [
        ...prevData.map((item) => {
          if (item._id != techId) return item;
          let links = [...item.links];
          const linkIdIdx = links.indexOf(linkId);
          links.splice(linkIdIdx, 1);
          return { ...item, links: links };
        }),
      ]);
    } catch (error) {
      setError(error.message);
    }
  };

  // const handleAddTechSection = useCallback(() => addTechSection(), []);

  return {
    tsdata,
    loading,
    error,
    addTechSection,
    deleteTechsection,
    addGurulink,
    deleteGurulink,
  };
};

export default useTechSection;
