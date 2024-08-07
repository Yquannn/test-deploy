import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
   
  }, []); 

  return { data, loading }; // Changed to return an object
};
