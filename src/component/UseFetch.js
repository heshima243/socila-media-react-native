import axios from "axios";
import { useState, useEffect } from "react";

const Usefetch = (url) => {

  const [data, setdata] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
     axios
      .get(url)
      .then((res) => {
        const fetchedArticles = res.data.articles || [];
        const limitedArticles = fetchedArticles.slice(0, 10);
        setdata(limitedArticles);
        setIsloading(false)
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setIsloading(false)
      });
  }, [url]);

  return { data, Isloading, error };
};

export default Usefetch;
