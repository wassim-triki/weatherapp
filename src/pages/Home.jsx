import React from "react";
import Forecast from "../components/Forecast";
import Form from "../components/Form";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error, fetchData } = useFetch();
  const handleSubmit = async (e, location) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_WEATHER_API}&q=${location}&aqi=no`;
    await fetchData(URL);
  };

  return (
    <div className="bg-body h-screen pt-20 px-2 ">
      <h1 className="text-5xl text-center text-gray-700 leading-tight ">
        Weather <strong className="tracking-wide">Forecast</strong>
      </h1>
      <Form handleSubmit={handleSubmit} />
      {error && <p>{error}</p>}

      {data && !error && <Forecast {...data} />}
    </div>
  );
};

export default Home;
