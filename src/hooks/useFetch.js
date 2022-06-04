import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url, options) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonResult = await response.json();
        setData(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    };
    fetchData();
  }, [url]);
  return { data, loading };
}
