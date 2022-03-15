import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getTempData = (data) => ({
    tempC: data?.current?.temp_c,
    tempF: data?.current?.temp_f,
    day: data?.current?.is_day,
    date: data?.current?.last_updated_epoch,
    humidity: data?.current?.humidity,
    discription: data?.current?.condition?.text,
    windKPH: data?.current?.wind_kph,
    windMPH: data?.current?.wind_mph,
  });
  const getLocationData = (data) => ({
    name: data?.location.name,
    region: data?.location.region,
    country: data?.location.country,
    localTime: data?.location.localtime,
  });

  const fetchData = async (url) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url);
      setError(response.status >= 400 && "Location not found.");
      const data = await response.json();
      const formattedData = {
        temperature: getTempData(data),
        location: getLocationData(data),
      };
      setData(formattedData);
      console.log(formattedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
